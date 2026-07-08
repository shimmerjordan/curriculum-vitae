// Shape of the site content. You rarely need to touch this file —
// edit the actual text in src/content.ts.

export type Lang = "en" | "zh";

export interface Job {
  org: string;
  role: string;
  period: string;
  kind: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  name: string;
  kind: string;
  period: string;
  metric: string;
  summary: string;
  tags: string[];
}

export interface Edu {
  school: string;
  degree: string;
  detail: string;
  period: string;
}

// A hidden "story behind the keyword" card, revealed when a reader clicks a
// dotted term inside a bullet. Reference it from bullet text with the markup
// [[displayed words|tipId]] — the tipId keys into Dict.tips. Fill only the
// fields you have; the card renders whichever are present.
export interface Tip {
  label: string;     // card title
  pain?: string;     // 业务痛点 — the problem behind the work
  decision?: string; // 技术决策 / 决策过程 — why this over the alternatives
  detail?: string;   // 实操细节 — what problem, how solved
  iterate?: string;  // 瑕疵 & 迭代思路 — critical thinking, what's next
}

export interface Dict {
  profile: {
    name: string;
    nameCn: string;
    initials: string;
    role: string;
    location: string;
    heroA: string;
    heroB: string;
    bioLeft: string;
    bioRight: string;
    about: string;
    focus: string;
  };
  nav: { about: string; experience: string; projects: string; contact: string };
  ui: {
    getInTouch: string;
    viewWork: string;
    downloadCv: string;
    onlineCv: string;
    viewProject: string;
    aboutKicker: string;
    experienceKicker: string;
    projectsKicker: string;
    letsBuild: string;
    reach: string;
    connect: string;
    education: string;
    awards: string;
    focusLabel: string;
    footerNote: string;
    tipHint: string;      // small note telling readers the dotted terms are clickable
    tipPain: string;      // section header inside a tip card
    tipDecision: string;
    tipDetail: string;
    tipIterate: string;
  };
  experience: Job[];
  projects: Project[];
  education: Edu[];
  awards: string[];
  stats: { value: string; label: string }[];
  tips: Record<string, Tip>;   // keyword-tip cards, keyed by the id used in [[…|id]] markup
}
