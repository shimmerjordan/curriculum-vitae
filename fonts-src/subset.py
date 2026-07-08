#!/usr/bin/env python3
"""Re-subset the Chinese display fonts to only the characters used on the site.

Run this whenever you add NEW Chinese characters to section titles or to any
company / project name (the pixel + brush fonts). Body text uses the system
font and never needs this.

    cd fonts-src && python3 subset.py

Needs: pip install fonttools brotli
Keeps the full TTFs in this folder (not bundled); outputs subset woff2 into
../src/assets/fonts/ (which Vite inlines).
"""
import re, subprocess, sys, pathlib

HERE = pathlib.Path(__file__).parent
CONTENT = HERE.parent / "src" / "content.ts"
OUT = HERE.parent / "src" / "assets" / "fonts"

src = CONTENT.read_text(encoding="utf-8")
cjk = sorted(set(re.findall(r"[一-鿿]", src)))
ascii_p = "".join(chr(c) for c in range(0x20, 0x7F))
punct = "　，。、·—…“”‘’（）《》：；！？％「」"
chars = ascii_p + punct + "".join(cjk)
(HERE / "chars.txt").write_text(chars, encoding="utf-8")
print(f"unique CJK: {len(cjk)}  total chars: {len(chars)}")

FONTS = [("Zpix.ttf", "zh-pixel.woff2"), ("MaShanZheng.ttf", "zh-kai.woff2")]
for ttf, woff2 in FONTS:
    ttf_path = HERE / ttf
    if not ttf_path.exists():
        print(f"!! missing {ttf} — download it into fonts-src/ first")
        sys.exit(1)
    subprocess.run([
        "pyftsubset", str(ttf_path),
        f"--text-file={HERE / 'chars.txt'}",
        f"--output-file={OUT / woff2}",
        "--flavor=woff2", "--no-hinting", "--desubroutinize",
    ], check=True)
    print(f"  {woff2}: {(OUT / woff2).stat().st_size} bytes")
print("done.")
