// Experience — timeline layout of work experience entries.
"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { EXPERIENCES } from "@/data/experience";

/**
 * Renders the Experience section as a vertical timeline of work entries.
 * All text is localised via experience.json.
 *
 * @returns The experience section element.
 */
export const Experience = () => {
  const { t } = useTranslation("experience");
  const { t: tCommon } = useTranslation("common");

  /**
   * Formats a date range string for display.
   *
   * @param start - Start date string (e.g. '2023-06').
   * @param end - End date string or null (current position).
   * @returns Formatted date range.
   */
  const formatDateRange = (start: string, end: string | null): string => {
    const formatDate = (d: string) => {
      const [year, month] = d.split("-");
      return `${month}/${year}`;
    };
    return `${formatDate(start)} — ${end ? formatDate(end) : tCommon("buttons.present")}`;
  };

  return (
    <SectionWrapper id="experience">
      <h2 className="section-title">{t("title")}</h2>
      <p className="section-subtitle">{t("subtitle")}</p>

      <div className="experience-timeline">
        {EXPERIENCES.map((exp) => (
          <article key={exp.id} className="experience-item">
            <p className="experience-dates">
              {formatDateRange(exp.startDate, exp.endDate)}
            </p>
            <h3 className="experience-role">{t(exp.roleKey)}</h3>
            <p className="experience-company">{t(exp.companyKey)}</p>
            <p className="experience-description">{t(exp.descriptionKey)}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
