// Site-wide metadata and social links — edit placeholder values with your real info.
import { SocialLink } from "@/types";

/** Site metadata used in the root layout and SEO tags. */
export const SITE_CONFIG = {
  /** Your full name displayed in the header and hero. */
  name: "Ege Sezak",
  /** Site title for the browser tab. */
  title: "Ege Sezak — Portfolio",
  /** Meta description for SEO. */
  description:
    "Personal portfolio showcasing projects, skills, and experience in software engineering, computer vision, and machine learning.",
  /** Base URL of the deployed site. */
  baseUrl: "https://esezak.github.io",
} as const;

/**
 * Social / contact links shown in the contact section and footer.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/esezak",
    icon: "FaGithub",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/ege-sezak-826b50264",
    icon: "FaLinkedin",
  },
  {
    platform: "Website",
    url: "https://esezak.github.io",
    icon: "FaGlobe",
  },
  {
    platform: "Email",
    url: "mailto:egesezaki03@gmail.com",
    icon: "FaEnvelope",
  },
  {
    platform: "Phone",
    url: "tel:+905457116802",
    icon: "FaPhone",
  },
];
