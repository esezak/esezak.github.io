// Shared TypeScript interfaces used across the portfolio site.

/** Represents a supported locale in the i18n system. */
export interface Locale {
  /** ISO language code (e.g. 'en', 'tr'). */
  code: string;
  /** Display label for the language (e.g. 'English'). */
  label: string;
  /** Path to the flag icon SVG relative to /public. */
  flagIcon: string;
}

/** Represents a navigation link in the header. */
export interface NavItem {
  /** The i18n key used to look up the translated label (in common.json). */
  labelKey: string;
  /** The target section id for anchor-scroll navigation. */
  sectionId: string;
}

/** Represents a social / contact link shown in the footer and contact section. */
export interface SocialLink {
  /** Platform name (e.g. 'GitHub', 'LinkedIn'). */
  platform: string;
  /** Full URL or mailto:/tel: link. */
  url: string;
  /** React Icons component name string (resolved at render time). */
  icon: string;
}

/** Represents a single project shown in the Projects section. */
export interface Project {
  /** Unique slug used as an identifier. */
  id: string;
  /** i18n key for the project title (in projects.json). */
  titleKey: string;
  /** i18n key for the project description (in projects.json). */
  descriptionKey: string;
  /** Path to the thumbnail image relative to /public. */
  image: string;
  /** URL to the GitHub repository. */
  repoUrl: string;
  /** Optional live demo URL. */
  demoUrl?: string;
  /** Array of technology names displayed as badges. */
  techStack: string[];
}

/** Represents a single skill within a skill category. */
export interface Skill {
  /** Display name of the skill. */
  name: string;
  /** React Icons component name string. */
  icon: string;
}

/** Represents a category of skills (e.g. 'Languages', 'Frameworks'). */
export interface SkillCategory {
  /** i18n key for the category title (in skills.json). */
  titleKey: string;
  /** Skills within this category. */
  skills: Skill[];
}

/** Represents a work experience entry. */
export interface Experience {
  /** Unique identifier. */
  id: string;
  /** i18n key for the company name (in experience.json). */
  companyKey: string;
  /** i18n key for the role/title (in experience.json). */
  roleKey: string;
  /** i18n key for the description (in experience.json). */
  descriptionKey: string;
  /** Start date string (e.g. '2023-01'). */
  startDate: string;
  /** End date string or null if currently employed. */
  endDate: string | null;
}

/** Represents an education entry. */
export interface Education {
  /** Unique identifier. */
  id: string;
  /** i18n key for the institution (in education.json). */
  institutionKey: string;
  /** i18n key for the degree / programme (in education.json). */
  degreeKey: string;
  /** i18n key for additional description (in education.json). */
  descriptionKey: string;
  /** Start year. */
  startYear: string;
  /** End year or null if still studying. */
  endYear: string | null;
}
