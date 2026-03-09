// Education — cards displaying academic background.
"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { EDUCATION_ITEMS } from "@/data/experience";

/**
 * Renders the Education section with cards for each education entry.
 * All text is localised via education.json.
 *
 * @returns The education section element.
 */
export const Education = () => {
  const { t } = useTranslation("education");
  const { t: tCommon } = useTranslation("common");

  /**
   * Formats a year range for display.
   *
   * @param start - Start year string.
   * @param end - End year string or null (currently studying).
   * @returns Formatted year range.
   */
  const formatYearRange = (start: string, end: string | null): string =>
    `${start} — ${end ?? tCommon("buttons.present")}`;

  return (
    <SectionWrapper id="education">
      <h2 className="section-title">{t("title")}</h2>
      <p className="section-subtitle">{t("subtitle")}</p>

      <div className="education-grid">
        {EDUCATION_ITEMS.map((edu) => (
          <article key={edu.id} className="education-card">
            <p className="education-years">
              {formatYearRange(edu.startYear, edu.endYear)}
            </p>
            <h3 className="education-degree">{t(edu.degreeKey)}</h3>
            <p className="education-institution">{t(edu.institutionKey)}</p>
            <p className="education-description">{t(edu.descriptionKey)}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
