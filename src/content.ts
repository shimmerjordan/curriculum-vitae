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
//   • PROJECTS_META.icon must be one of: Package · Bot · Gamepad2 · Cpu · LineChart
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
  "C++", "Python", "Rust", "ROS", "Qt / QML", "UE5", "Unity", "C#",
  "HarmonyOS", "Vulkan", "gRPC",
];
export const MARQUEE_B = [
  "Docker Compose", "CI / CD", "RAG", "LLM Tool-Calling", "MCP", "XGBoost",
  "Celery", "Three.js", "Vibe Coding", "IL Injection", "Machine Learning",
];

// -------- per-project visual config (edit these; order matches CONTENT.projects)
// `image`: leave "" for a designed gradient panel, or drop in a URL / imported
// asset to show a real preview screenshot.
export const PROJECTS_META = [
  { accent: "linear-gradient(135deg,#89AACC 0%,#b600a8 100%)", icon: "Package",  image: "", link: "https://github.com/shimmerjordan" },
  { accent: "linear-gradient(135deg,#b600a8 0%,#7621b0 100%)", icon: "Bot",      image: "", link: "" },
  { accent: "linear-gradient(135deg,#4E85BF 0%,#89AACC 100%)", icon: "Gamepad2", image: "", link: "" },
  { accent: "linear-gradient(135deg,#be4c00 0%,#7621b0 100%)", icon: "Cpu",      image: "", link: "" },
  { accent: "linear-gradient(135deg,#7621b0 0%,#4E85BF 100%)", icon: "LineChart",image: "", link: "https://github.com/shimmerjordan/loan-pred-customer-behavior" },
] as const;

// ---- CONTENT (all translatable text) ----------------------------------------
export const CONTENT: Record<Lang, Dict> = {
  // ============================ English ============================
  en: {
    profile: {
      name: "Qiaodan Ju",
      nameCn: "鞠桥丹",
      initials: "AD",
      role: "Robotics · HMI · AI Systems Engineer",
      location: "Shanghai, China",
      heroA: "Where hardware",
      heroB: "meets intelligence",
      bioLeft:
        "Robotics middleware, HarmonyOS engines and AI-driven workflows — I turn complex systems into things that ship.",
      bioRight:
        "From MAX/HMI platforms to AAA game-engine ports and self-healing CI, I build the layer where machines and software meet.",
      about:
        "I'm Qiaodan Ju — an engineer working across robotics middleware, HarmonyOS game-engine porting and AI-driven automation. From XYZ Robotics' MAX/HMI platform to Huawei's terminal-cloud engine work, I turn tangled systems into products that ship. Move your cursor across the hero and watch life grow over the rock — that's the kind of transformation I like to build.",
      focus:
        "Robotics middleware integration · C++ · Python · ROS · UE5 engine customization · automation & CI/CD · XXClaw deployment · AI-native tooling.",
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
      projectsKicker: "Selected builds",
      letsBuild: "Let's build something that moves",
      reach: "Reach me",
      connect: "Find me online",
      education: "Education",
      awards: "Selected awards",
      focusLabel: "Focus areas",
      footerNote: "Robotics · HMI · AI Systems Engineer",
    },
    experience: [
      {
        org: "XYZ Robotics · 星猿哲",
        role: "MAX / HMI Development",
        period: "2025 — Now",
        kind: "Robotics Middleware",
        bullets: [
          "Led Qt-HMI version iteration into a unified loading / unloading / de-palletizing operator platform; integrated multi-protocol (gRPC/HTTP) robot-arm systems and the in-house CSM & MAX platforms.",
          "Shipped truck-loading for complex carriages (partitions, liner sleeves), high-DOF unloading & de-palletizing, manual stack-pattern planning, and deeply self-adaptive blind-load / blind-code operation.",
          "Drove the new HMI front & back-end via Vibe coding (web HMI + Python); wrapped MAX in Rust, stripped redundant modules and optimized memory-heavy paths.",
          "Owned the in-house MAX integration & deployment platform — virtual-env streaming render, log-debug replay, a virtual teach-pendant — plus full CI/CD (Lint → Review → Optimism → SOP staking → preset & self-analyzing Diff-Func tests), cloud defect auto-ticketing with AI repair, and an AI auto-Loop for point calibration & model-parameter tuning.",
          "Rebuilt the company's fragmented i18n around a Translation-MCP tool + universal scaffold; deployed XXClaw with a local-LLM buffer to cut cloud token cost. Delivered on-site rollouts for P&G palletizing, Xiaomi auto-assembly, ZARA Home (DE) and UNIS (US) special-SKU.",
        ],
        tags: ["Qt / QML", "Rust", "Python", "gRPC", "MAX", "AI CI/CD"],
      },
      {
        org: "Huawei · Terminal Cloud",
        role: "R&D Engineer B",
        period: "2024 — 2025",
        kind: "Game Engine",
        bullets: [
          "Harmonized engines & clients for multiple DAU-500w+ titles (QQ Speed, Contra, Genshin-class) — 95% first-launch completeness.",
          "Adapted Vulkan / vsync / foldable-hinge render modules; led SDK packaging CICD harmonization (wwise, glcloud, webcamera) with recompile & integration.",
          "Solved frame-stutter & thermals with a CPU load-balancing strategy — stable 60fps under stress, −7°C peak temperature.",
          "Migrated UTU's animation, scripting & viewport-render modules (95% of AngryBot assets & VFX); built a high-extensibility export framework + Unity instance-serialization plugin exporting 100k+ assets in ~30s; resolved nested / layered state-machine compatibility on the UE side.",
          "Designed the UE-side U3 scripting runtime — IL-injection reflection of U3 properties/classes, optimized glue layer, Mono + xlua injection at ≤2% overhead; ported the UE camera & CineMachine (100% logic / 90% peripheral reuse), cutting art & client workload by 85%.",
        ],
        tags: ["UE5", "Unity", "Vulkan", "IL Injection", "C#"],
      },
      {
        org: "Huawei · Wireless",
        role: "R&D Engineer B",
        period: "2023 — 2024",
        kind: "AI / DevOps",
        bullets: [
          "Led fault-mode development & AI integration for an automated test framework: an async-analysis + redundant-review architecture landing base-station config-residue, script-degradation and cert-service-anomaly fault modes.",
          "Built an XGBoost + RAG dual-head model on a Celery priority-driven concurrent inference pipeline — 30k factory cases analysed in 12h (30% failure peak), 50% manpower saved, +60% defense success & stability at negligible cost.",
          "Delivered the factory visualization portal (front & back-end): cross-factory inspection & assessment, defense-health monitoring, version/iteration-grained entry-and-exit-factory tooling.",
          "Designed a peak-shaving power + load-balancing strategy saving ~5k kWh/day (workdays) and ~9k kWh/day (weekends); built public test APIs exposing comms & control for gimbals and robot arms.",
        ],
        tags: ["XGBoost", "RAG", "Celery", "Python", "DevOps"],
      },
      {
        org: "Hithink · Megvii · NUS Next++ Lab",
        role: "Earlier — Internships & Research",
        period: "2021 — 2023",
        kind: "Internships",
        bullets: [
          "Android dev intern at Hithink Flush — delivered 30+ real-time news-feed UI features and joined an ES analytics-engine optimization project.",
          "Algorithm intern at Megvii (Transformer-Bumblebee) — improved the detection head, designed key-point post-processing clustering and a low-deployment-cost RIM solution.",
          "Research assistant at NUS Next++ Lab — image-caption research: AdamW optimizer tuning, caption-evaluation algorithm design and an adaptive high-efficiency optimizer redesign.",
        ],
        tags: ["Android", "Detection", "Research"],
      },
    ],
    projects: [
      {
        name: "Home Storage Voice Butler",
        kind: "Personal · Vibe Coding",
        period: "2026",
        metric: "Fully local · LLM-agnostic",
        summary:
          "End-to-end home-storage system, fully local via Docker Compose. A multi-LLM-provider abstraction with tool-calling / JSON dual-mode and weighted token-overlap summarization keeps AI cost controllable. Voice wake & item lookup drive a Three.js 3D scene that flies the camera to highlight positions; Function-Calling maps intent precisely (illness → medicine need, locating the drug + basic guidance). Feishu WebSocket stream bypasses the NAS's lack of a public IP; SQLite auto-migration + CSV backward-compat, field-level audit logs, ring-buffer + rotating logs and a merged front/back log viewer.",
        tags: ["Docker", "LLM", "Three.js", "SQLite", "WebSocket"],
      },
      {
        name: "MAX / HMI Platform",
        kind: "XYZ Robotics · Product",
        period: "2025 — Now",
        metric: "1 platform · many sites",
        summary:
          "Unified operator platform for loading / unloading / de-palletizing robots — a Qt & web HMI over a Rust-wrapped MAX runtime, integrating in-house CSM/MAX, with virtual-env streaming render, log-replay debugging, a virtual teach-pendant and self-adaptive blind-load / blind-code operation. Full requirement-to-feature CI/CD with AI-assisted defect triage & self-repair.",
        tags: ["Qt / QML", "Rust", "Python", "gRPC", "MAX"],
      },
      {
        name: "HarmonyOS Engine Port",
        kind: "Huawei · Product",
        period: "2024 — 2025",
        metric: "95% first-launch",
        summary:
          "AAA-class mobile titles & engines ported to HarmonyOS at 95% first-launch completeness. Vulkan / vsync / foldable adaptation, a UE-rebuilt Unity viewport pipeline with IL-injection scripting bridges, 100% CineMachine logic reuse and stable 60fps at −7°C peak — cutting art & client workload by 85%.",
        tags: ["UE5", "Unity", "Vulkan", "IL Injection", "C#"],
      },
      {
        name: "AI Test Automation",
        kind: "Huawei · Platform",
        period: "2023 — 2024",
        metric: "50% manpower saved",
        summary:
          "XGBoost + RAG dual-head fault analysis on a Celery priority-driven inference pipeline — 30k factory cases in 12h, 50% manpower saved, +60% defense stability. Includes an async-analysis + redundant-review architecture, a factory visualization portal and public device-control APIs; a peak-shaving power strategy saved 5–9k kWh/day.",
        tags: ["XGBoost", "RAG", "Celery", "Python", "DevOps"],
      },
      {
        name: "Loan-Default Prediction",
        kind: "Kaggle · Competition",
        period: "2021",
        metric: "TOP 5% on Kaggle",
        summary:
          "Supervised model for customer credit-default behaviour on Kaggle — feature engineering, class-imbalance handling and ensemble tuning, ranked TOP 5%.",
        tags: ["Python", "ML", "Feature Eng.", "Ensemble"],
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
      { value: "4+", label: "Years Engineering" },
      { value: "95%", label: "HarmonyOS Launch Completeness" },
      { value: "50%", label: "Manpower Saved via AI" },
      { value: "60fps", label: "Stable Under Stress · −7°C" },
    ],
  },

  // ============================= 中文 =============================
  zh: {
    profile: {
      name: "Qiaodan Ju",
      nameCn: "鞠桥丹",
      initials: "QJ",
      role: "机器人 · HMI · AI 系统工程师",
      location: "中国 · 上海",
      heroA: "让硬件",
      heroB: "遇见智能",
      bioLeft:
        "机器人中间件、鸿蒙引擎与 AI 驱动的工程流 —— 我把复杂系统打磨成能落地的产品。",
      bioRight:
        "从 MAX/HMI 平台到 3A 游戏引擎移植、再到自愈式 CI，我搭建机器与软件相遇的那一层。",
      about:
        "我是鞠桥丹 —— 横跨机器人中间件、鸿蒙游戏引擎移植与 AI 自动化的工程师。从星猿哲的 MAX/HMI 平台到华为终端云的引擎工作，我把盘根错节的系统变成能交付的产品。把光标划过首页，看生命在岩石上生长 —— 那正是我喜欢构建的那种「转化」。",
      focus:
        "机器人中间件集成 · C++ · Python · ROS · UE5 引擎定制 · 自动化与 CI/CD · XXClaw 部署优化 · AI 原生工具链。",
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
      projectsKicker: "精选作品",
      letsBuild: "一起做点能打动人的东西",
      reach: "联系方式",
      connect: "在网上找到我",
      education: "教育经历",
      awards: "主要奖项",
      focusLabel: "专业方向",
      footerNote: "机器人 · HMI · AI 系统工程师",
    },
    experience: [
      {
        org: "星猿哲 · XYZ Robotics",
        role: "MAX / HMI 研发",
        period: "2025 — 至今",
        kind: "机器人中间件",
        bullets: [
          "主导 Qt 版 HMI 版本迭代，搭建装卸车、拆码垛一体的用户操作平台；适配 gRPC/HTTP 等多协议机械臂作业系统，接入 CSM、MAX 等自研平台。",
          "上线带隔断 / 内衬等复杂车厢环境的装车、高自由度卸车 / 拆垛、手动垛型规划，以及深度自适应的盲卸盲码作业。",
          "推动新版 HMI 前后端设计开发，深度用 Vibe coding 构建 Web HMI + Python 后端；用 Rust 封装 MAX，逐步剥离冗余模块、优化内存高位路径。",
          "主导自研 MAX 集成部署平台——虚拟环境推流渲染、日志侦错回放、虚拟示教器；搭建全链路 CI/CD（Lint → Review → Optimism → SOP 打桩 → 预设与自分析 Diff-Func Test），云端缺陷自动提单 + AI 修复，并实现点位校准 / 模型调参的 AI 自动化 Loop。",
          "重构全公司过度分散的国际化方案，集成 Translation MCP 工具 + 通用翻译 scaffold；部署 XXClaw + 本地 LLM 缓冲降低云端 token 消耗。落地宝洁码垛、小米汽车装配、德国 ZARA Home、美国 UNIS 特殊 SKU 等现场项目。",
        ],
        tags: ["Qt / QML", "Rust", "Python", "gRPC", "MAX", "AI CI/CD"],
      },
      {
        org: "华为 · 终端云",
        role: "研发工程师 B",
        period: "2024 — 2025",
        kind: "游戏引擎",
        bullets: [
          "将多款 DAU>500w 头部手游（QQ 飞车、魂斗罗、原神级）的引擎与客户端鸿蒙化，首发完整度 95%。",
          "完成 Vulkan / vsync / 折叠屏开合等渲染模块适配；主导 SDK（wwise、glcloud、webcamera）出包 CICD 鸿蒙适配、重编译与集成。",
          "攻克卡帧发热关键问题，设计并接入 CPU 负载均衡策略——高压测试稳定 60 帧、峰值降温 7℃。",
          "迁移 UTU 动画 / 脚本 / 视口渲染模块（AngryBot 全场景 95% 资产及特效）；落地高可拓展导出框架 + Unity 实例序列化插件，支持十万级资产约 30s 导出；解决 UE 侧套状态机、分层状态机兼容性。",
          "主导 UE 侧 U3 脚本运行环境——IL 注入实现 U3 属性 / 类的反射、优化胶水层，Mono + xlua 注入综合损耗 ≤2%；改造 UE 相机并移植 CineMachine（逻辑 100% / 周边 90% 复用），减少技美与客户端 85% 工作量。",
        ],
        tags: ["UE5", "Unity", "Vulkan", "IL 注入", "C#"],
      },
      {
        org: "华为 · 无线",
        role: "研发工程师 B",
        period: "2023 — 2024",
        kind: "AI / DevOps",
        bullets: [
          "主导自动化测试框架故障模式开发与 AI 集成：设计异步分析 + 冗余审核架构，落地基站配置残留、脚本劣化、证书服务异常等故障模式。",
          "构建 XGBoost + RAG 双头分析模型，基于 Celery 优先级驱动的多进程并发推理流水线——12h 完成工厂 3w 用例（峰值 30% 失败）分析，节省人力 50%，防线成功率与稳定性提升 60%。",
          "交付产线工厂可视化门户（前后端）：工厂间巡检评估、防线健康监控回显，以版本与迭代周期为颗粒度的入厂 / 检厂功能。",
          "设计错峰用电 + 负载均衡策略，工作日日均节电约 5k 度、休息日约 9k 度；开发测试框架公共 API，暴露云台与机械手等设备的通信与控制接口。",
        ],
        tags: ["XGBoost", "RAG", "Celery", "Python", "DevOps"],
      },
      {
        org: "同花顺 · 旷视 · NUS Next++ 实验室",
        role: "早期 —— 实习与研究",
        period: "2021 — 2023",
        kind: "实习经历",
        bullets: [
          "同花顺云软件 · 安卓开发实习——落地手炒安卓版实时资讯页表现层需求 30+，参与 ES 数据分析引擎优化项目。",
          "旷视科技 · 算法实习（Transformer-Bumblebee）——改进预测头，设计关键点后处理聚类策略与低部署压力 RIM 方案。",
          "NUS Next++ 实验室 · 研究助理——图生文项目：AdamW 优化器调优、caption evaluation 算法设计与自适应高效 optimizer 重设计。",
        ],
        tags: ["Android", "目标检测", "科研"],
      },
    ],
    projects: [
      {
        name: "家庭仓储语音管家",
        kind: "个人 · Vibe Coding",
        period: "2026",
        metric: "全本地 · 不锁定 LLM",
        summary:
          "端到端家庭仓储系统，Docker Compose 完全本地化部署。多 LLM provider 抽象层 + tool-calling / JSON 双模式 + 加权 token-overlap 上下文摘要，实现成本可控的 AI 调用。语音唤醒与物品查询驱动 Three.js 3D 场景推进相机高亮物品位置；Function Call 精准转换需求（如生病 → 药物需求，定位药品并给出基础建议）。飞书 WebSocket 流模式规避 NAS 无公网；SQLite 自动迁移 + CSV 向后兼容、字段级审计日志、内存环形缓冲 + 文件轮转日志、前后端合并日志查看器。",
        tags: ["Docker", "LLM", "Three.js", "SQLite", "WebSocket"],
      },
      {
        name: "MAX / HMI 平台",
        kind: "星猿哲 · 产品",
        period: "2025 — 至今",
        metric: "一个平台 · 多现场",
        summary:
          "装卸车 / 拆码垛机器人统一操作平台——Qt 与 Web HMI 运行于 Rust 封装的 MAX 运行时，集成自研 CSM/MAX，含虚拟环境推流渲染、日志回放侦错、虚拟示教器与自适应盲卸盲码作业；需求到 feature 全链路 CI/CD，AI 辅助缺陷提单与自修复。",
        tags: ["Qt / QML", "Rust", "Python", "gRPC", "MAX"],
      },
      {
        name: "鸿蒙引擎移植",
        kind: "华为 · 产品",
        period: "2024 — 2025",
        metric: "首发完整度 95%",
        summary:
          "3A 级手游与引擎鸿蒙化，首发完整度 95%。Vulkan / vsync / 折叠屏适配，UE 重建 Unity 视口管线并以 IL 注入桥接脚本，CineMachine 逻辑 100% 复用，高压稳定 60 帧、峰值降温 7℃——技美与客户端工作量降低 85%。",
        tags: ["UE5", "Unity", "Vulkan", "IL 注入", "C#"],
      },
      {
        name: "AI 测试自动化",
        kind: "华为 · 平台",
        period: "2023 — 2024",
        metric: "节省人力 50%",
        summary:
          "基于 Celery 优先级推理流水线的 XGBoost + RAG 双头故障分析——12h 处理工厂 3w 用例、节省人力 50%、防线稳定性提升 60%。含异步分析 + 冗余审核架构、产线可视化门户与设备控制公共 API；错峰用电策略日省 5–9k 度电。",
        tags: ["XGBoost", "RAG", "Celery", "Python", "DevOps"],
      },
      {
        name: "用户借贷违约预测",
        kind: "Kaggle · 竞赛",
        period: "2021",
        metric: "Kaggle 前 5%",
        summary:
          "Kaggle 用户借贷违约行为监督学习模型——特征工程、类别不平衡处理与集成调优，最终排名前 5%。",
        tags: ["Python", "机器学习", "特征工程", "集成"],
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
      "NUS 硕士 · Merit（前 7%）",
      "2019 数模美赛 H 奖",
      "东北大学奖学金 · 2018–2020",
      "2018「于永岭」命名奖学金",
    ],
    stats: [
      { value: "4+", label: "年工程经验" },
      { value: "95%", label: "鸿蒙首发完整度" },
      { value: "50%", label: "AI 节省人力" },
      { value: "60fps", label: "高压稳定 · 降温 7℃" },
    ],
  },
};
