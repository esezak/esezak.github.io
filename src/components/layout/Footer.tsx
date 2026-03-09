// Footer — site footer with social links and copyright notice.
"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/config/site";
import { useTranslation } from "@/hooks/useTranslation";

/** Maps icon string identifiers from SOCIAL_LINKS to React Icon components. */
const ICON_MAP: Record<string, React.ComponentType> = {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGlobe,
};

/**
 * Renders the site footer with social icon links and a copyright notice.
 *
 * @returns The footer element.
 */
export const Footer = () => {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear().toString();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-socials">
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = ICON_MAP[link.icon];
            return (
              <a
                key={link.platform}
                href={link.url}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                title={link.platform}
              >
                {IconComponent ? <IconComponent /> : null}
              </a>
            );
          })}
        </div>
        <p className="footer-copy">{t("footer.copyright", { year })}</p>
      </div>
    </footer>
  );
};
