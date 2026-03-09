// Experience data — work experience entries displayed in the Experience section.
import { Experience, Education } from "@/types";

/**
 * Work experience entries. Each field references i18n keys in experience.json.
 * Edit this array to add or remove experience items.
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    companyKey: "items.exp1.company",
    roleKey: "items.exp1.role",
    descriptionKey: "items.exp1.description",
    startDate: "2025-06",
    endDate: "2025-07",
  },
];

/**
 * Education entries. Each field references i18n keys in education.json.
 * Edit this array to add or remove education items.
 */
export const EDUCATION_ITEMS: Education[] = [
  {
    id: "edu1",
    institutionKey: "items.edu1.institution",
    degreeKey: "items.edu1.degree",
    descriptionKey: "items.edu1.description",
    startYear: "2022",
    endYear: "2026",
  },
  {
    id: "edu2",
    institutionKey: "items.edu2.institution",
    degreeKey: "items.edu2.degree",
    descriptionKey: "items.edu2.description",
    startYear: "2019",
    endYear: "2022",
  },
  {
    id: "edu3",
    institutionKey: "items.edu3.institution",
    degreeKey: "items.edu3.degree",
    descriptionKey: "items.edu3.description",
    startYear: "2018",
    endYear: "2022",
  },
];
