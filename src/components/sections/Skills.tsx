// Skills — grouped skill badges rendered from data and locale files.
"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/hooks/useTranslation";
import { SKILL_CATEGORIES } from "@/data/skills";

/**
 * Renders the Skills section with categorised skill badges.
 * Categories and their titles come from data + locale files.
 *
 * @returns The skills section element.
 */
export const Skills = () => {
  const { t } = useTranslation("skills");

  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">{t("title")}</h2>
      <p className="section-subtitle">{t("subtitle")}</p>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.titleKey} className="skill-category-card">
            <h3 className="skill-category-title">{t(category.titleKey)}</h3>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <Badge key={skill.name} label={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
