// =============================================================================
//  SITE CONTENT — the single source of truth for every word on the page.
//  Edit here, then run `npm run build` to regenerate dist/index.html.
//
//  This file, top to bottom:
//    ASSETS         hero images / résumé PDF / background video
//                   (to swap: drop new files into src/assets/ and re-import)
//    LINKS          email + social / site URLs
//    MARQUEE_A / B  the two scrolling tech-tag rows (shared by both languages)
//    PROJECTS_META  per-project accent colour · icon · preview image · link
//    CONTENT.en / CONTENT.zh   ALL translatable text, one block per language
//
//  How to edit:
//   • Change text: find the field inside CONTENT.en / CONTENT.zh and edit the
//     string. Keep the two languages in sync.
//   • Add an experience / project / award: copy an existing { … } block, paste
//     it, edit it — and do the SAME in BOTH CONTENT.en and CONTENT.zh.
//     For a project also add one row to PROJECTS_META (order = matching order).
//   • projects[] are PERSONAL builds only (work goes under experience[]).
//   • PROJECTS_META.icon must be one of the keys in the ICONS map in
//     src/components/Projects.tsx (Globe · Boxes · Wrench · Clapperboard ·
//     Network · BarChart3 …). Add more icons there if you need them.
//   • PROJECTS_META.image: "" shows a designed gradient panel; set a URL or an
//     imported asset to show a real preview screenshot instead.
//
//  ⚠ Chinese fonts: the pixel (big titles) + brush (company/project names)
//    fonts are SUBSET to the characters currently used. If you introduce NEW
//    Chinese characters in a heading or a *.name / *.org, re-run the subsetter:
//        cd fonts-src && python3 subset.py
//    (body text uses the system font and never needs this.)
//
//  Type definitions live in ./content.types.ts — you rarely touch them.
// =============================================================================
import heroBase from "./assets/hero-base.webp";
import heroReveal from "./assets/hero-reveal.webp";
import cvPdf from "./assets/Qiaodan_Ju_CV.pdf";
import bgVideo from "./assets/bg-small.mp4";
import type { Dict, Lang } from "./content.types";

export type { Lang, Job, Project, Edu, Dict } from "./content.types";

// ---- ASSETS -----------------------------------------------------------------
export const ASSETS = { heroBase, heroReveal, cvPdf, bgVideo };

// language-independent links
export const LINKS = {
  email: "shimmerjordan@dingtalk.com",
  github: "https://github.com/shimmerjordan",
  blog: "https://blog.shimmerjordan.eu.org",
  portal: "https://shimmerjordan.eu.org/",
  onlineCv: "https://cv.shimmerjordan.eu.org",
};

// scroll marquee — tech stack (same in both languages)
export const MARQUEE_A = [
  "TypeScript", "Rust", "Python", "C++", "Dart / Flutter", "React", "Vue",
  "Qt / QML", "C#", "Node.js",
];
export const MARQUEE_B = [
  "LLM Tool-Calling", "MCP", "RAG", "Agent Workflows", "Docker Compose",
  "CI / CD", "conan / vcpkg", "asyncio", "UE5 / Unity", "rerun", "XGBoost",
];

// -------- per-project visual config (edit these; order matches CONTENT.projects)
// `image`: leave "" for a designed gradient panel, or drop in a URL / imported
// asset to show a real preview screenshot. `link`: live site if it has one,
// else the source repo.
export const PROJECTS_META = [
  { accent: "linear-gradient(135deg,#4E85BF 0%,#b600a8 100%)", icon: "Globe",        image: "", link: "https://explore-travel-three.vercel.app" },
  { accent: "linear-gradient(135deg,#b600a8 0%,#7621b0 100%)", icon: "Boxes",        image: "", link: "https://github.com/shimmerjordan/home_repo_git" },
  { accent: "linear-gradient(135deg,#7621b0 0%,#4E85BF 100%)", icon: "Wrench",       image: "", link: "https://github.com/shimmerjordan/self-host-fusion360-MCP" },
  { accent: "linear-gradient(135deg,#be4c00 0%,#7621b0 100%)", icon: "Heart",        image: "", link: "https://ab-ad-wedd-card.vercel.app" },
] as const;

// ---- CONTENT (all translatable text) ----------------------------------------
export const CONTENT: Record<Lang, Dict> = {
  // ============================ English ============================
  en: {
    profile: {
      name: "Qiaodan Ju",
      nameCn: "鞠桥丹",
      initials: "AD",
      role: "Solutions Architect · Full-Stack · Platform Engineering",
      location: "Shanghai, China",
      heroA: "From tangled systems",
      heroB: "to living products",
      bioLeft:
        "Full-stack engineer and solutions architect — I scope the feature, design the system and ship the whole stack: control engines, services, platforms and the pipelines that build them.",
      bioRight:
        "The person who turns a fuzzy requirement into a shipped product and keeps optimizing it — shaping the roadmap, leading a small team, and building the AI workflows that make the whole shop move faster.",
      about:
        "I'm Qiaodan Ju — a full-stack engineer and solutions architect, the kind who takes a real-world problem end-to-end and keeps sharpening it. I've grown from writing code to designing the products around it: scoping features, architecting the systems, and shipping across robotics control platforms, simulation engines, cross-platform apps and dev-infra. I engineer AI into the workflow itself — agent-driven pipelines that turn a chat message into a filed, fixed and shipped issue — because I'm convinced the next decade belongs to the people who weave it into how they build. Move your cursor across the hero and watch life grow over the bare rock — that's the kind of transformation I like to build.",
      focus:
        "Solutions architecture · full-stack across Rust / Python / C++ / TypeScript / Flutter · config-driven control & orchestration engines · simulation & digital-twin release gates · platform engineering (CI/CD, dependency trees, dev-infra) · AI-workflow automation (agent-driven Feishu→Jira→PR loops, LLM tool-calling, MCP, RAG).",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", contact: "Contact" },
    ui: {
      getInTouch: "Get in touch",
      viewWork: "View projects",
      downloadCv: "Download résumé",
      onlineCv: "Online CV",
      viewProject: "View project",
      aboutKicker: "About & contact",
      experienceKicker: "Where I've worked",
      projectsKicker: "Personal builds",
      letsBuild: "Let's build something that moves",
      reach: "Reach me",
      connect: "Find me online",
      education: "Education",
      awards: "Selected awards",
      focusLabel: "Focus areas",
      footerNote: "Solutions Architect · Full-Stack · Platform Engineering",
      tipHint:
        "✦ Tap the dotted terms for the pain behind them, the calls I made, and what I'd still fix.",
      tipPain: "The pain",
      tipDecision: "The call",
      tipDetail: "How",
      tipIterate: "What I'd still fix",
    },
    experience: [
      {
        org: "XYZ Robotics · 星猿哲",
        role: "Software Lead · Solutions Architect",
        period: "2025 — Now",
        kind: "Robotics Software / Platform",
        bullets: [
          "Own the software across our palletizing / de-palletizing and truck loading-unloading robots — from the control engines to the platform tooling around them. I scope features with customers, architect the systems, lead a small team and ship end-to-end: the one who turns a fuzzy requirement into a shipped product and keeps optimizing it.",
          "Led the productization of our conveyor-sortation control system, which had fragmented into 30+ un-mergeable per-site branches (each new site took person-months to launch). Diagnosed the root cause across the entire branch history and designed a 'single engine + per-site config packs + visual orchestration platform' — a [[blueprint-style editor|csm]] (drag-and-drop topology, rule decision-tables, event-flow graph) that lets a deployment engineer stand up a new site without touching code.",
          "Built that platform end-to-end: a Python / asyncio rule engine (zero-eval structured condition trees, timing guards, a typed plugin escape-hatch, decision tracing) behind a React + @xyflow/react three-canvas editor, a unified log bus, and a built-in simulator wired in as the release gate.",
          "Lead the in-house robotics simulation engine and the validation & observability layer around it — a Rust ECS + physics + rendering engine with multi-language client SDKs driving a [[digital-twin release gate|simgate]], a Rust real-time 3D web scene viewer (Rust server + C/C++ client + Vite front-end, pub/sub streaming), and a Rust + React log collection / replay / annotation tool that renders multi-source robot logs into a rerun timeline (now the team's debugging standard).",
          "Own the engineering platform: reworked the Bitbucket → Drone CI/CD release pipelines and optimized the conan / vcpkg dependency tree across the C++ / Rust repos — faster, reproducible builds with clean channel-based versioning.",
          "Built the AI-workflow layer that keeps delivery moving: an agent-driven ops loop where a Feishu bot intakes an on-site problem, auto-files and triages a Jira issue, then drives it through an autonomous plan → implement → review → CHANGELOG → PR cycle (a self-built [[jira-flow|jiraflow]] agent skill wired to Atlassian), backed by a company knowledge base for fast on-site lookup and AI-assisted defect triage & self-repair in CI. Shipped on-site for P&G, Xiaomi, ZARA Home (DE) and UNIS (US).",
        ],
        tags: ["Solutions Architecture", "Rust", "Python", "React", "CI/CD", "AI Workflows"],
      },
      {
        org: "Huawei · Terminal Cloud",
        role: "R&D Engineer",
        period: "2024 — 2025",
        kind: "Game Engine",
        bullets: [
          "Ported multiple 500 M+ DAU AAA-class mobile games and their engines to HarmonyOS at 95% first-launch feature completeness — adapting the Vulkan / vsync / foldable-hinge render path and harmonizing the SDK build & CI pipeline (recompile + integration).",
          "Solved frame-stutter and thermal throttling with a CPU load-balancing strategy — holding a stable 60 fps under stress test while dropping peak temperature by 7 °C.",
          "Explored Unity→Unreal porting tooling: rebuilt Unity's animation / scripting / viewport-render modules on the UE side, and designed a high-extensibility export framework + a Unity instance-serialization plugin that exports 100k+ assets in ~30 s, resolving nested / layered state-machine compatibility.",
          "Designed the UE-side scripting runtime — reflecting the source engine's properties & classes via [[IL injection|ilinject]] with a Mono + xLua bridge at ≤2% overhead — and ported the camera & cinematic-camera system (100% logic reuse, 90% of peripherals), cutting art & client rework by 85%.",
        ],
        tags: ["UE5", "Unity", "Vulkan", "IL Injection", "C#", "HarmonyOS"],
      },
      {
        org: "Huawei · Wireless",
        role: "R&D Engineer",
        period: "2023 — 2024",
        kind: "AI / Platform",
        bullets: [
          "Led fault-mode development & AI integration for an automated test framework: an async-analysis + redundant-review architecture landing base-station config-residue, script-degradation and certificate-service fault modes.",
          "Built an [[XGBoost + RAG dual-head model|dualhead]] on a Celery priority-driven concurrent inference pipeline — 30k factory cases analysed in 12 h (30% failure peak), 50% manpower saved, +60% defense success & stability at negligible cost.",
          "Delivered the factory visualization portal end-to-end (front & back-end): cross-factory inspection & assessment, defense-health monitoring, and version/iteration-grained entry-and-exit-factory tooling.",
          "Designed a peak-shaving power + load-balancing strategy saving ~5–9k kWh/day, and built the public test APIs exposing comms & control for gimbals and robot arms.",
        ],
        tags: ["XGBoost", "RAG", "Celery", "Python", "Full-Stack"],
      },
      {
        org: "Hithink · Megvii · NUS Next++ Lab",
        role: "Earlier — Internships & Research",
        period: "2021 — 2023",
        kind: "Internships",
        bullets: [
          "Android dev intern at Hithink Flush — delivered 30+ real-time news-feed UI features and joined an ElasticSearch analytics-engine optimization project.",
          "Algorithm intern at Megvii (Transformer detection) — improved the detection head, designed key-point post-processing clustering and a [[low-deployment-cost solution|rim]].",
          "Research assistant at NUS Next++ Lab — image-caption research: AdamW optimizer tuning, caption-evaluation algorithm design and an adaptive, high-efficiency optimizer redesign.",
        ],
        tags: ["Android", "Deep Learning", "Research"],
      },
    ],
    projects: [
      {
        name: "Explore Journal",
        kind: "Personal · Flutter × Rust",
        period: "2026",
        metric: "4 platforms · 1 codebase",
        summary:
          "A self-hosted, backend-less travel companion inspired by Fog of World — one Flutter codebase shipping Android, iOS, Linux and a read-only web \"memory\" edition. Light up a [[vector fog-of-war|fog]] as you move, track routes with a battery-aware Android foreground service, and plan trips with streaming AI; a decentralised Ed25519-signed leaderboard and a 12-module chunked export/import sync over WebDAV and P2P. An optional tiny Rust + Docker backend stores only your settings — inside a zero-knowledge encrypted vault — so you own every byte of your data.",
        tags: ["Flutter", "Rust", "Docker", "P2P", "AI"],
      },
      {
        name: "Voice Storage Butler",
        kind: "Personal · Self-Hosted",
        period: "2026",
        metric: "Fully local",
        summary:
          "A fully-local home-storage brain: find, stash and retrieve things by voice or via DingTalk / Telegram / Feishu group bots. The frontend runs in an iPad browser; a Docker-Compose backend lives on a low-power industrial NAS and only ever sends [[a tiny intent summary|voicelocal]] to a configurable OpenAI-compatible LLM. Multiple \"homes\", a 3D walk-through of every room and cabinet with camera fly-to + highlight on a hit, WebDAV backup with GFS retention + AES, and a WeChat mini-program as an isolated third client.",
        tags: ["Vue", "Docker", "LLM", "Three.js", "NAS"],
      },
      {
        name: "Fusion 360 MCP",
        kind: "Personal · AI / MCP",
        period: "2026",
        metric: "~100 tools",
        summary:
          "A self-hosted MCP server that lets Claude (or any MCP client) [[drive Autodesk Fusion 360|fusionarch]] on your own machine — model parts, run booleans, fillet, drill and export straight from a conversation. Unifies the community's Fusion-MCP ideas into one foolproof package: ~100 tools plus a generic-API escape hatch, a Windows one-click installer, one-command Docker, bilingual docs and a `doctor` that pinpoints misconfig. Validated end-to-end against a real Fusion install with a 57-step coverage test.",
        tags: ["MCP", "Python", "Docker", "Claude", "CAD"],
      },
      {
        name: "Stardew Wedding Invitation",
        kind: "Personal · Playable Invite",
        period: "2026",
        metric: "1 file · 0 deps",
        summary:
          "A wedding invitation you can actually play — a Stardew-Valley-style pixel game in a [[single zero-build, zero-dependency HTML file|wedding]]. Guests roam the farm as bride or groom and unlock the invite by farming, fishing (a full three-stage catch minigame), mining gems for the museum and raising affection — then hold the ceremony in the wedding hall, where a GET-param highlights their own banquet table. Everything is config-driven (names, story branches, exhibits, seating), RSVP is collected backend-less through a third-party form, and a hidden DEBUG mode is a visual editor for exhibits, seating and per-guest share links.",
        tags: ["Vanilla JS", "Game Loop", "Pixel Art", "Zero-Build", "Config-Driven"],
      },
    ],
    education: [
      {
        school: "National University of Singapore",
        degree: "MSc · Data Science & Machine Learning",
        detail: "GPA 4.28/5.0 (92.8) · TOP 7% · Merit",
        period: "2021 — 2023",
      },
      {
        school: "Northeastern University",
        degree: "BEng · Software Engineering",
        detail: "GPA 3.91/5.0 (89.1) · IELTS 7.0 · GRE 331",
        period: "2017 — 2021",
      },
    ],
    awards: [
      "Huawei 2023 NEO Outstanding Trainee",
      "Huawei DPC Outstanding Camper",
      "Huawei “Star of Tomorrow”",
      "Chengdu Institute · Outstanding QCC 2023",
      "Excellent Convert-to-FTE Intern",
      "Kaggle Competition · TOP 5%",
      "NUS MSc · Merit (TOP 7%)",
      "MCM/ICM Meritorious (H) · 2019",
      "NEU Scholarships · 2018–2020",
    ],
    stats: [
      { value: "4+", label: "Years shipping software" },
      { value: "50%", label: "Manpower saved via AI workflows" },
      { value: "6+", label: "Products shipped end-to-end" },
      { value: "5+", label: "Languages in production" },
    ],
    tips: {
      csm: {
        label: "Productizing a forked control system",
        pain: "The control system had splintered into 30+ per-site branches — ~33k lines of divergence, and every new site took person-months. Topology was already config-driven, but behaviour was still hard-coded as `if name == '...'` in the core loop, so any behavioural difference forced a code fork.",
        decision: "I weighed five options — from a string-eval DSL to a full UE-style dataflow blueprint — and deliberately rejected the most powerful one as over-modelling: ~80% of site differences are just topology + parameters. So I scoped the editor to sit 'more complex than a flowchart, simpler than a UE blueprint', with a typed plugin as the escape hatch for the other 20%.",
        detail: "The rule engine is zero-eval structured condition trees (a prior refactor's eval-DSL had been killed for good reason); a FieldCatalog introspects the dataclasses so validation and the UI dropdowns come from one source — killing the old double-maintained field lists.",
        iterate: "It's v0.1: the built-in simulator is fast tick-level, not high-fidelity, and the big bet — that a 33k-line branch diff collapses into one config pack — is still unproven. My honest next step is to migrate one real legacy site as the test, and to config-drive the last site-name hardcode I left in the snapshot builder.",
      },
      simgate: {
        label: "Making simulation the release gate",
        pain: "Sim and production had drifted into separate branches — one was literally named 'sim changed code, inconvenient to merge back'. Sim-verified fixes couldn't reach prod and vice-versa, so nobody dared merge anyone.",
        decision: "Instead of keeping sim as a side tool, I made it a release gate: the sim reads the photo-electric bus through the exact same path as real hardware (a mock Modbus over a Redis bitmap), so behaviour is identical. Nothing ships until it passes a feed→sort→pick closed loop and emits a replay.",
        detail: "Observability is one bus, many sinks — file logs + .rrd + JSONL — with rerun entity paths namespaced ROS2-style (`<site>/csu/<name>`); a Rust real-time 3D web viewer (Rust server + C/C++ client + Vite front-end, pub/sub) streams the live scene.",
        iterate: "A gate is only as good as its scenario coverage, and feeding representative cases is still manual. Fast-sim vs high-fidelity is a tradeoff I'm actively tuning — speed of feedback against realism.",
      },
      jiraflow: {
        label: "An agent that runs the dev loop",
        pain: "On-site problems arrived as Feishu chat messages, got lost or hand-re-keyed into Jira, and the loop after — branch, plan, implement, changelog, PR — was pure repetitive toil.",
        decision: "I built it as an agent-driven loop, not a rigid script: Feishu intake → auto-file + triage a Jira issue → an autonomous plan→implement→review→CHANGELOG→PR cycle. Branch names carry the issue key so Jira's dev panel auto-links, and the sprint id is queried live because sprints roll — never hard-coded.",
        detail: "It's a custom agent 'skill' wired to the Atlassian API, with hard rules: no commits to base branches, a human gate before implementation, and a code-graph index to ground the plan step.",
        iterate: "I keep the human review gate on purpose — I don't yet trust it to merge unsupervised. Next is tightening the triage classifier and actually measuring its mis-file rate instead of trusting it.",
      },
      ilinject: {
        label: "Porting a scripting runtime by IL injection",
        pain: "Getting one engine's C# gameplay to run on the other engine would have meant re-authoring everything by hand — enormous art + client rework.",
        decision: "Instead of manual re-authoring I reflected the source engine's properties & classes via IL injection and bridged with Mono + xLua — trading a small, bounded runtime overhead for massive reuse.",
        detail: "Kept the bridge overhead ≤2% and reused 100% of the camera & cinematic-camera logic; the exporter was built deliberately over-extensible because I expected a long tail.",
        iterate: "~5% of assets/VFX didn't auto-port — nested / layered state machines were the hard edge and needed manual fixup. That long tail, not the happy path, is where most of the real engineering went.",
      },
      dualhead: {
        label: "Why a dual-head model, not one classifier",
        pain: "30k factory cases had to be triaged in hours during a 30%-failure peak, but a single model either over-flagged everything or missed the rare, costly fault modes.",
        decision: "I split it into an XGBoost head for structured signals and a RAG head for the messy log/text context, fused their votes, and ran them on a Celery priority queue so the scary cases jump the line.",
        detail: "12 h for 30k cases, ~50% manpower saved, +60% stability — at negligible extra cost, because inference is cheap and prioritised.",
        iterate: "The RAG head is only as good as its retrieved corpus, and genuinely new fault modes still need a human in the loop; the honest win was throughput and triage order, not full autonomy.",
      },
      rim: {
        label: "Optimising for deployment cost, not just accuracy",
        pain: "A detection model that tops a lab benchmark is useless if it can't be deployed cheaply at the edge.",
        decision: "I improved the detection head, but designed the key-point post-processing and a low-cost variant around the constraint of actually shipping it — not just topping a leaderboard.",
        detail: "Post-processing clustering to stabilise key-points, with deployment cost treated as a first-class objective.",
        iterate: "Early-career work — with hindsight I'd measure the accuracy/cost tradeoff far more rigorously than I did then.",
      },
      fog: {
        label: "Rendering fog of war without the jaggies",
        pain: "Fog of World-style 64×64 raster bitmap tiles alias badly when you clear a trail, and a naive clear paints false straight lines across GPS dropouts.",
        decision: "I keep the bitmap tiles for storage / stats / sync (so it stays FOW-compatible), but render the visible trail as an anti-aliased vector swept-disk stroke through the actual GPS samples — bit-exact at low zoom for data integrity, feathered-smooth at high zoom for looks.",
        detail: "Dual representation: raster for persistence & interop, vector for display; per-segment split on GPS dropout; single-pass gaussian-feathered clear; brush radius / opacity tunable per layer.",
        iterate: "The two representations can drift, so keeping the raster bake and the vector render in sync is the fiddly part I keep refining.",
      },
      voicelocal: {
        label: "Local-first, but still LLM-smart",
        pain: "I wanted natural-language search over everything I own — without shipping my home inventory to a cloud LLM.",
        decision: "Everything runs on a low-power NAS; only a tiny intent summary (never the data) leaves the box, to a configurable OpenAI-compatible endpoint — so the model is swappable and the raw data stays home.",
        detail: "Docker-Compose on an N5105 industrial NAS; weighted token-overlap summarization to keep the prompt (and cost) small; SQLite auto-migration with CSV back-compat.",
        iterate: "On-device voice latency is the weak spot, and summary-only occasionally drops context a full RAG would keep — a tradeoff I accept for privacy.",
      },
      fusionarch: {
        label: "Why two processes, not one",
        pain: "Fusion's API can only be called inside Fusion, on its main thread — no external process can touch it, so a plain MCP server can't drive it.",
        decision: "Split it: an in-Fusion add-in holds the main thread, and an MCP server (native or Docker) talks to it over localhost HTTP + a shared token; ~100 typed tools plus a generic-API escape hatch so nothing is out of reach.",
        detail: "Docker only containerizes the server (Fusion is a desktop GUI, can't be containerized) — it reaches the host add-in via host.docker.internal; a `doctor` command diagnoses the single most common misconfig.",
        iterate: "The generic-API hatch is powerful but blunt (arbitrary calls); I'd rather auto-generate more typed wrappers so people reach for it less.",
      },
      wedding: {
        label: "A wedding invite that's a whole game",
        pain: "A static invitation card is forgettable — I wanted guests to actually do something, and to reuse it for everyone without a backend or a build step.",
        decision: "One self-contained HTML file: a hand-rolled Stardew-style game loop (farming / fishing / mining / affection + an economy) in vanilla JS — no framework, no build, no server. Everything variable (names, story branches, museum exhibits, seating) is config, and each guest gets a personalised link via GET params (`?gn=name&gt=table`).",
        detail: "Backend-less RSVP piggybacks on a third-party form; a hidden DEBUG mode (tap the version 10×) is a visual editor that exports a config JSON deployed alongside the file; per-guest table highlighting comes straight from the query string.",
        iterate: "One giant vanilla-JS file is a joy to ship but a pain to maintain — the game state grew organically, and to push it further I'd want a real state model and a scene system.",
      },
    },
  },

  // ============================= 中文 =============================
  zh: {
    profile: {
      name: "Qiaodan Ju",
      nameCn: "鞠桥丹",
      initials: "QJ",
      role: "解决方案架构 · 全栈开发 · 平台工程",
      location: "中国 · 上海",
      heroA: "把盘根错节的系统",
      heroB: "长成鲜活的产品",
      bioLeft:
        "全栈工程师与解决方案架构——我拆解需求、设计系统,并把整条栈交付出去:控制引擎、服务、平台,以及构建它们的流水线。",
      bioRight:
        "把模糊需求变成能上线的产品、再持续打磨的那个人:规划路线、带一支小团队,并搭建让整个团队跑得更快的 AI 工作流。",
      about:
        "我是鞠桥丹——一名全栈工程师与解决方案架构师,那种会把一个实际问题端到端接下来、再不断打磨的人。我正从「写代码」成长为「设计代码所服务的产品」:拆解需求、架构系统,并在机器人控制平台、仿真引擎、跨端应用与研发基建上端到端交付。我把 AI 搭进研发流程本身——用 agent 驱动的流水线,把一条聊天消息变成「已提单、已修复、已发布」的闭环——因为我坚信未来十年属于能把 AI 织进自己构建方式里的人。把光标划过首页,看生命在裸岩上生长——那正是我喜欢构建的那种「转化」。",
      focus:
        "解决方案架构 · Rust / Python / C++ / TypeScript / Flutter 全栈 · 配置驱动的控制与编排引擎 · 仿真与数字孪生发布门禁 · 平台工程(CI/CD、依赖树、研发基建)· AI 工作流自动化(agent 驱动的 飞书→Jira→PR 闭环、LLM 工具调用、MCP、RAG)。",
    },
    nav: { about: "关于", experience: "经历", projects: "项目", contact: "联系" },
    ui: {
      getInTouch: "联系我",
      viewWork: "看项目",
      downloadCv: "下载简历",
      onlineCv: "在线简历",
      viewProject: "查看项目",
      aboutKicker: "关于与联系",
      experienceKicker: "工作经历",
      projectsKicker: "个人作品",
      letsBuild: "一起做点能打动人的东西",
      reach: "联系方式",
      connect: "在网上找到我",
      education: "教育经历",
      awards: "主要奖项",
      focusLabel: "专业方向",
      footerNote: "解决方案架构 · 全栈开发 · 平台工程",
      tipHint:
        "✦ 点击带虚线的关键词,看背后的痛点、我做的取舍,以及还想改的地方。",
      tipPain: "痛点",
      tipDecision: "抉择",
      tipDetail: "怎么做的",
      tipIterate: "还想改的",
    },
    experience: [
      {
        org: "星猿哲 · XYZ Robotics",
        role: "软件负责人 · 解决方案架构",
        period: "2025 — 至今",
        kind: "机器人软件 / 平台",
        bullets: [
          "负责码垛 / 拆垛与装卸车机器人的整条软件线——从控制引擎到围绕它的平台工具。与客户对齐需求、架构系统、带一支小团队、端到端交付:那个把模糊需求变成能上线产品、再持续打磨的人。",
          "主导输送分拣控制系统的产品化:它此前已分裂成 30+ 条互不可合的现场分支(每上一个新现场都要耗费数人月)。我在全分支历史上做根因诊断,提出「一个引擎 + 每现场一个配置包 + 可视化编排平台」的方案——一个[[蓝图式编辑器|csm]](拖拽拓扑、规则决策表、事件流画布),让部署工程师不碰代码就能拉起一个新现场。",
          "把这个平台端到端做了出来:Python / asyncio 规则引擎(零 eval 的结构化条件树、时序守护、带类型的插件逃生舱、决策追踪),前端是 React + @xyflow/react 三画布编辑器,配一条统一日志总线,并内置仿真器作为发布门禁。",
          "主导自研机器人仿真引擎及其验证与可观测层——一套 Rust ECS + 物理 + 渲染引擎(配多语言客户端 SDK)支撑[[数字孪生发布门禁|simgate]],一套 Rust 实时 3D 网页场景查看器(Rust server + C/C++ client + Vite 前端,发布/订阅推流),以及一套 Rust + React 的日志采集 / 重放 / 标注工具,把多源机器人日志渲染成 rerun 时间轴(现为团队排障标准)。",
          "负责工程平台:重构 Bitbucket → Drone 的 CI/CD 发布流水线,优化 C++ / Rust 各仓的 conan / vcpkg 依赖树——更快、可复现的构建与清晰的 channel 版本管理。",
          "搭建让交付持续运转的 AI 工作流层:一条 agent 驱动的运维闭环——飞书机器人接收现场问题,自动提单并分诊 Jira issue,再驱动它走完「规划→实现→评审→更新 CHANGELOG→PR」的自主开发循环(一个我自研、接入 Atlassian 的 [[jira-flow|jiraflow]] agent skill),背后配一套供现场快速查询的公司知识库,以及 CI 里的 AI 辅助缺陷分诊与自修复。落地宝洁、小米汽车、德国 ZARA Home、美国 UNIS 等现场。",
        ],
        tags: ["解决方案架构", "Rust", "Python", "React", "CI/CD", "AI 工作流"],
      },
      {
        org: "华为 · 终端云",
        role: "研发工程师",
        period: "2024 — 2025",
        kind: "游戏引擎",
        bullets: [
          "将多款 DAU>5 亿的 3A 级手游及其引擎鸿蒙化,首发完整度 95%——适配 Vulkan / vsync / 折叠屏开合渲染路径,并统一 SDK 出包与 CI 流水线(重编译 + 集成)。",
          "攻克卡帧与发热降频:设计并接入 CPU 负载均衡策略——高压测试稳定 60 帧,峰值降温 7℃。",
          "探索 Unity→Unreal 迁移工具链:在 UE 侧重建 Unity 的动画 / 脚本 / 视口渲染模块,并设计高可拓展导出框架 + Unity 实例序列化插件,支持十万级资产约 30s 导出,解决套状态机 / 分层状态机的兼容性。",
          "主导 UE 侧脚本运行环境——用 [[IL 注入|ilinject]] 反射源引擎的属性与类,Mono + xLua 桥接综合损耗 ≤2%——并移植相机与运镜相机系统(逻辑 100% 复用、周边 90%),减少技美与客户端 85% 的返工。",
        ],
        tags: ["UE5", "Unity", "Vulkan", "IL 注入", "C#", "鸿蒙"],
      },
      {
        org: "华为 · 无线",
        role: "研发工程师",
        period: "2023 — 2024",
        kind: "AI / 平台",
        bullets: [
          "主导自动化测试框架的故障模式开发与 AI 集成:设计异步分析 + 冗余审核架构,落地基站配置残留、脚本劣化、证书服务异常等故障模式。",
          "构建 [[XGBoost + RAG 双头分析模型|dualhead]],跑在 Celery 优先级驱动的多进程并发推理流水线上——12h 完成工厂 3w 用例(峰值 30% 失败)分析,节省人力 50%,防线成功率与稳定性提升 60%,成本几乎可忽略。",
          "端到端交付产线工厂可视化门户(前后端):工厂间巡检评估、防线健康监控回显,以及以版本 / 迭代周期为颗粒度的入厂 / 检厂功能。",
          "设计错峰用电 + 负载均衡策略,日均节电约 5–9k 度;开发测试框架公共 API,暴露云台与机械臂等设备的通信与控制接口。",
        ],
        tags: ["XGBoost", "RAG", "Celery", "Python", "全栈"],
      },
      {
        org: "同花顺 · 旷视 · NUS Next++ 实验室",
        role: "早期 —— 实习与研究",
        period: "2021 — 2023",
        kind: "实习经历",
        bullets: [
          "同花顺云软件 · 安卓开发实习——落地手炒安卓版实时资讯页表现层需求 30+,参与 ElasticSearch 数据分析引擎优化项目。",
          "旷视科技 · 算法实习(Transformer 目标检测)——改进预测头,设计关键点后处理聚类策略与[[低部署成本方案|rim]]。",
          "NUS Next++ 实验室 · 研究助理——图生文项目:AdamW 优化器调优、caption evaluation 算法设计与自适应高效 optimizer 重设计。",
        ],
        tags: ["安卓", "深度学习", "科研"],
      },
    ],
    projects: [
      {
        name: "Explore Journal",
        kind: "个人 · Flutter × Rust",
        period: "2026",
        metric: "四端一码",
        summary:
          "受《世界迷雾》启发的自托管、无后端旅行伴侣——一套 Flutter 代码同时交付 Android / iOS / Linux 与只读的网页「回忆」版。移动时点亮[[矢量迷雾战争|fog]],以省电的安卓前台服务记录轨迹,用流式 AI 规划行程;去中心化的 Ed25519 签名榜单,以及 12 模块分块导入导出经 WebDAV 与 P2P 同步。可选的 Rust + Docker 迷你后端只存配置——且封进零知识加密保险箱——每一个字节都归你自己。",
        tags: ["Flutter", "Rust", "Docker", "P2P", "AI"],
      },
      {
        name: "语音仓储管家",
        kind: "个人 · 自托管",
        period: "2026",
        metric: "全本地运行",
        summary:
          "完全本地的家庭仓储大脑:用语音,或钉钉 / Telegram / 飞书群机器人查找、存放、取出物品。前端跑在 iPad 浏览器,Docker Compose 后端部署在低功耗工控 NAS 上,只把[[极少量意图摘要|voicelocal]]发给可配置的 OpenAI 兼容 LLM。支持多个「家」、所有房间与家具的 3D 漫游(命中即相机推进 + 高亮 + 周围淡出),WebDAV 备份含 GFS 分层保留 + AES 加密,并以微信小程序作为隔离的第三端。",
        tags: ["Vue", "Docker", "LLM", "Three.js", "NAS"],
      },
      {
        name: "Fusion 360 MCP",
        kind: "个人 · AI / MCP",
        period: "2026",
        metric: "~100 工具",
        summary:
          "自托管的 MCP 服务器,让 Claude(或任意 MCP 客户端)在本机[[驱动 Autodesk Fusion 360|fusionarch]]——建模、布尔、倒角、钻孔、导出全在一段对话里完成。把社区各家 Fusion-MCP 的优点整合成一个「防呆」包:~100 个工具 + 通用 API 逃生舱、Windows 一键安装、一条命令 Docker、中英双语文档,以及能精确指出配置问题的 `doctor`。已用 57 步覆盖测试对真实 Fusion 端到端验证。",
        tags: ["MCP", "Python", "Docker", "Claude", "CAD"],
      },
      {
        name: "星露谷婚礼请帖",
        kind: "个人 · 可玩请帖",
        period: "2026",
        metric: "单文件 · 零依赖",
        summary:
          "一份可以玩的婚礼请帖——星露谷像素风小游戏,[[纯前端单文件、零构建零依赖|wedding]]。宾客扮新郎 / 新娘在农场走动,靠种田、钓鱼(完整三段钓鱼小游戏)、挖矿捐宝石、刷好感,一步步解锁请帖,最终在婚礼殿堂完成仪式——并由 GET 参数高亮自己的喜宴桌位。一切皆可配置(姓名、剧情分支、展品、桌位),RSVP 回执借第三方问卷零后端收集,还藏了个 DEBUG 模式内置可视化编辑器(展品 / 桌位 / 每位宾客专属分享链接)。",
        tags: ["原生 JS", "游戏循环", "像素美术", "零构建", "配置驱动"],
      },
    ],
    education: [
      {
        school: "新加坡国立大学",
        degree: "硕士 · 数据科学与机器学习",
        detail: "GPA 4.28/5.0 (92.8) · 前 7% · Merit",
        period: "2021 — 2023",
      },
      {
        school: "东北大学",
        degree: "学士 · 软件工程",
        detail: "GPA 3.91/5.0 (89.1) · 雅思 7.0 · GRE 331",
        period: "2017 — 2021",
      },
    ],
    awards: [
      "华为 2023 NEO 优秀学员",
      "华为 DPC 优秀营员",
      "华为 明日之星",
      "成都研究所 · 2023 优秀 QCC",
      "Excellent 转正实习生",
      "Kaggle 竞赛 · 前 5%",
      "NUS 硕士 · Merit(前 7%)",
      "2019 数模美赛 H 奖",
      "东北大学奖学金 · 2018–2020",
      "2018「于永岭」命名奖学金",
    ],
    stats: [
      { value: "4+", label: "年软件交付" },
      { value: "50%", label: "AI 工作流节省人力" },
      { value: "6+", label: "端到端交付产品" },
      { value: "5+", label: "投产编程语言" },
    ],
    tips: {
      csm: {
        label: "把分叉的控制系统产品化",
        pain: "控制系统已裂成 30+ 条现场分支——约 3.3 万行分歧,每上一个新现场都要数人月。拓扑早已配置化,但**行为**还硬编码成核心环里的 `if name == '...'`,任何行为差异都逼着开一条新分支。",
        decision: "我比了五个方案——从字符串 eval DSL 到 UE 式全数据流蓝图——并特意否掉了最强的那个当作过度建模:现场差异约 80% 只是拓扑 + 参数。于是把编辑器定位在「比流程图复杂一点、比 UE 蓝图简单」,剩下 20% 用带类型的插件当逃生舱。",
        detail: "规则引擎是零 eval 的结构化条件树(上一轮重构的 eval-DSL 已被判死刑);FieldCatalog 内省 dataclass,让校验和 UI 下拉同源——干掉了过去两处各维护一份的字段表。",
        iterate: "这才 v0.1:内置仿真器是快速的 tick 级、不是高保真;而最大的赌注——「3.3 万行分支 diff 能塌缩成一个配置包」——至今未被证明。我诚实的下一步是拿一个真实老现场去迁移验证,并把快照构建里我留下的最后一处现场名硬编码也配置化。",
      },
      simgate: {
        label: "把仿真做成发布门禁",
        pain: "仿真与生产漂成了两条分支——有一条名字直接就是「因为 sim 改了代码,不方便合回」。仿真验证过的修复到不了生产,反之亦然,于是谁也不敢合谁。",
        decision: "我没把仿真当旁路工具,而是做成发布门禁:仿真通过与真机完全相同的路径读光电总线(Redis 位图上的 mock Modbus),行为一致。任何配置不先跑通「投料→分拣→抓取」闭环并产出回放,就不许下发。",
        detail: "可观测是一条总线多个 sink——文件日志 + .rrd + JSONL,rerun 的 entity path 按 ROS2 风格分层(`<site>/csu/<name>`);另配一套 Rust 实时 3D 网页查看器(Rust server + C/C++ client + Vite 前端,发布/订阅)推流实时场景。",
        iterate: "门禁的价值取决于场景覆盖,而喂进代表性用例目前还是手工的。快速仿真 vs 高保真是我正在调的权衡——反馈速度对现实度。",
      },
      jiraflow: {
        label: "一个替你跑开发闭环的 agent",
        pain: "现场问题以飞书消息进来,常被遗漏或人工誊进 Jira;之后那套(开分支、plan、实现、写 CHANGELOG、PR)全是重复劳动。",
        decision: "我把它做成 agent 驱动的闭环而非死脚本:飞书接单 → 自动提单 + 分诊 Jira → 自主走完 plan→实现→评审→CHANGELOG→PR。分支名带 issue key 让 Jira 开发面板自动关联;冲刺 id 实时查询(冲刺会滚动),从不写死。",
        detail: "这是一个接入 Atlassian API 的自研 agent「skill」,带硬约束:禁止对 base 分支提交、实现前必须过人工闸;plan 步骤用 code-graph 索引给自己找依据。",
        iterate: "我故意保留人工评审闸——还不敢让它无人监督直接合并。下一步是收紧分诊分类器,并真正去量化它的误提单率,而不是盲信。",
      },
      ilinject: {
        label: "用 IL 注入移植脚本运行时",
        pain: "让一个引擎的 C# 玩法跑到另一个引擎上,若纯手工重写就是海量的技美 + 客户端返工。",
        decision: "我没手工重写,而是用 IL 注入反射源引擎的属性与类,再用 Mono + xLua 桥接——拿一个小而有界的运行时损耗,换来大规模复用。",
        detail: "桥接综合损耗压到 ≤2%,相机与运镜逻辑 100% 复用;导出器特意做得过度可拓展,因为我预判会有长尾。",
        iterate: "约 5% 的资产 / 特效没能自动迁移——套状态机 / 分层状态机是最硬的边,得手工兜。真正的工程量恰恰在这条长尾,而不是在顺风的主路径上。",
      },
      dualhead: {
        label: "为什么用双头模型而非单分类器",
        pain: "3w 工厂用例要在几小时内分诊完(还是 30% 失败峰值),但单一模型要么过度告警、要么漏掉稀有又昂贵的故障模式。",
        decision: "我拆成 XGBoost 头(结构化信号)+ RAG 头(杂乱的日志 / 文本上下文),融合两者投票,并跑在 Celery 优先级队列上,让危险用例插队优先。",
        detail: "12h 处理 3w 用例、省人力约 50%、稳定性 +60%——额外成本几乎可忽略,因为推理便宜且带优先级。",
        iterate: "RAG 头的上限取决于检索语料,真正新出现的故障模式仍需人在环;诚实地说,赢在吞吐与分诊顺序,而非完全自动化。",
      },
      rim: {
        label: "按部署成本优化,而不只是精度",
        pain: "一个只在实验室刷分很高的检测模型,若不能在边端低成本部署,就没有用。",
        decision: "我改进了预测头,但把关键点后处理与低成本变体都围绕「能落地部署」这个约束来设计,而不是只冲榜。",
        detail: "用后处理聚类稳住关键点;把部署成本当成一等的优化目标。",
        iterate: "这是早期作品——现在回看,我会比当时远为严格地去量化精度 / 成本的权衡。",
      },
      fog: {
        label: "把迷雾战争渲染得没有锯齿",
        pain: "《世界迷雾》式的 64×64 位图瓦片在擦除轨迹时锯齿很重,而朴素的擦除会在 GPS 断点之间画出假的直线。",
        decision: "我保留位图瓦片用于存储 / 统计 / 同步(从而与 FOW 兼容),但把可见轨迹渲染成穿过真实 GPS 采样点的抗锯齿矢量扫掠圆笔迹——低缩放位级精确保证数据完整,高缩放羽化平滑保证好看。",
        detail: "双表示:位图负责持久化与互通,矢量负责显示;按 GPS 断点分段;单遍高斯羽化擦除;笔刷半径 / 透明度按图层可调。",
        iterate: "两种表示会漂移,让位图烘焙和矢量渲染保持一致是我一直在打磨的细活。",
      },
      voicelocal: {
        label: "本地优先,但依然 LLM 够聪明",
        pain: "我想对自己拥有的一切做自然语言搜索——但不想把家里的物品清单送上云端 LLM。",
        decision: "一切都跑在低功耗 NAS 上;只有极少量意图摘要(绝不含数据本身)离开机器,发给可配置的 OpenAI 兼容端点——模型可换,原始数据留在家里。",
        detail: "N5105 工控 NAS 上的 Docker-Compose;加权 token-overlap 摘要把 prompt(与成本)压小;SQLite 自动迁移 + CSV 向后兼容。",
        iterate: "端上语音延迟是弱点;而只发摘要偶尔会丢掉全量 RAG 能保住的上下文——这是我为隐私接受的取舍。",
      },
      fusionarch: {
        label: "为什么是两个进程,而不是一个",
        pain: "Fusion 的 API 只能在 Fusion 内、且在主线程上调用——外部进程碰不到,所以普通 MCP 服务器没法直接驱动它。",
        decision: "拆成两部分:一个驻留 Fusion 的插件占住主线程,一个 MCP 服务器(原生或 Docker)通过 localhost HTTP + 共享令牌与它通信;~100 个带类型的工具,外加一个通用 API 逃生舱,没有够不着的地方。",
        detail: "Docker 只容器化服务器(Fusion 是桌面 GUI,无法容器化)——靠 host.docker.internal 访问宿主插件;一个 `doctor` 命令诊断最常见的配置错误。",
        iterate: "通用 API 逃生舱强大但太钝(任意调用);我更想自动生成更多带类型的封装,让人少用它。",
      },
      wedding: {
        label: "一张请帖,其实是一整个游戏",
        pain: "静态请帖卡片转身就忘;我想让宾客真的能『做点什么』,还要能零后端、零构建地复用给每一位来宾。",
        decision: "做成一个自包含的 HTML 文件——用原生 JS 手写的星露谷式游戏循环(种田 / 钓鱼 / 挖矿 / 好感 + 经济系统),无框架、无构建、无服务器。一切可变的东西(姓名、剧情分支、博物馆展品、桌位)都是配置,每位宾客用 GET 参数拿到专属链接(`?gn=姓名&gt=桌号`)。",
        detail: "零后端 RSVP 借第三方问卷;一个隐藏 DEBUG 模式(连点版本号 10 下)是可视化编辑器,导出配置 JSON 与文件一起部署;桌位从 query string 直接高亮。",
        iterate: "一个巨大的原生 JS 单文件写着爽、维护起来疼——游戏状态是长出来的,若要继续做大,得上真正的状态模型与场景系统。",
      },
    },
  },
};
