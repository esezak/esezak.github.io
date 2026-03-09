// Projects — grid of project cards with thumbnails, descriptions, tech badges, and GitHub links.
"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { useTranslation } from "@/hooks/useTranslation";
import { PROJECTS } from "@/data/projects";

/**
 * Renders the Projects section as a responsive grid of project cards.
 * Each card shows a thumbnail, localised title/description, tech badges,
 * and links to the GitHub repository.
 *
 * @returns The projects section element.
 */
export const Projects = () => {
  const { t } = useTranslation("projects");
  const { t: tCommon } = useTranslation("common");

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">{t("title")}</h2>
      <p className="section-subtitle">{t("subtitle")}</p>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="project-card-image"
              loading="lazy"
            />
            <div className="project-card-body">
              <h3 className="project-card-title">{t(project.titleKey)}</h3>
              <p className="project-card-description">{t(project.descriptionKey)}</p>

              <div className="project-card-tech">
                {project.techStack.map((tech) => (
                  <Badge key={tech} label={tech} />
                ))}
              </div>

              <div className="project-card-links">
                <a
                  href={project.repoUrl}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub /> {tCommon("buttons.viewCode")}
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> {tCommon("buttons.viewProject")}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};
