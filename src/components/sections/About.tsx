// About — short bio section with a placeholder profile image.
"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

/**
 * Renders the About Me section with a profile image placeholder and bio text.
 *
 * @returns The about section element.
 */
export const About = () => {
  const { t } = useTranslation("about");

  return (
    <SectionWrapper id="about">
      <h2 className="section-title">{t("title")}</h2>
      <p className="section-subtitle">{t("subtitle")}</p>

      <div className="about-grid">
        <div className="about-image-wrapper">
          <Image
            src="/images/profile.jpg"
            alt={t("title")} // Use the title as alt text "About Me"
            width={400}
            height={400}
            className="about-image"
            priority
          />
        </div>

        <div className="about-text">
          <p>{t("paragraph1")}</p>
          <p>{t("paragraph2")}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};
