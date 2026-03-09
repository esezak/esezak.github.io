// Navigation links configuration — controls which sections appear in the header nav.
import { NavItem } from "@/types";

/**
 * Ordered list of navigation items.
 * To add or remove a section from the nav, edit this array.
 * Each labelKey maps to a key in common.json (e.g. "nav.about").
 */
export const NAV_ITEMS: NavItem[] = [
  { labelKey: "nav.about", sectionId: "about" },
  { labelKey: "nav.skills", sectionId: "skills" },
  { labelKey: "nav.projects", sectionId: "projects" },
  { labelKey: "nav.experience", sectionId: "experience" },
  { labelKey: "nav.education", sectionId: "education" },
  { labelKey: "nav.contact", sectionId: "contact" },
];
