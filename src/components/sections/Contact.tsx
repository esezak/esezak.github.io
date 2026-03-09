// Contact — section with icon links to email, GitHub, LinkedIn, and phone.
"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useTranslation } from "@/hooks/useTranslation";
import { SOCIAL_LINKS } from "@/config/site";

/** Maps icon string identifiers to React Icon components. */
const ICON_MAP: Record<string, React.ComponentType> = {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGlobe,
};

/**
 * Renders the Contact section with a description and icon-link cards
 * for each social/contact channel.
 *
 * @returns The contact section element.
 */
export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <SectionWrapper id="contact">
      <h2 className="section-title">{t("title")}</h2>
      <p className="section-subtitle">{t("subtitle")}</p>

      <div className="contact-content">
        <p>{t("description")}</p>

        <div className="contact-links">
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = ICON_MAP[link.icon];
            const labelKey = `labels.${link.platform.toLowerCase()}`;

            return (
              <a
                key={link.platform}
                href={link.url}
                className="contact-link-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon">
                  {IconComponent ? <IconComponent /> : null}
                </span>
                <span className="contact-link-label">{t(labelKey)}</span>
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
