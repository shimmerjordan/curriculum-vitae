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
  };
  experience: Job[];
  projects: Project[];
  education: Edu[];
  awards: string[];
  stats: { value: string; label: string }[];
}
