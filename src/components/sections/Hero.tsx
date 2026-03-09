// Hero — full-viewport intro section with name, title, and resume download buttons.
"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Renders the hero/landing section with an animated greeting, name,
 * title, description, and CTA buttons for downloading EN/TR resumes.
 *
 * @returns The hero section element.
 */
export const Hero = () => {
  const { t } = useTranslation("hero");
  const { t: tCommon } = useTranslation("common");

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t("name")}
        </motion.h1>

        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {t("title")}
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {t("description")}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Button href="/resumes/Ege_Sezak_Resume_EN.pdf" download>
            <FiDownload /> {tCommon("buttons.downloadResumeEN")}
          </Button>
          <Button href="/resumes/Ege_Sezak_Resume_TR.pdf" variant="outline" download>
            <FiDownload /> {tCommon("buttons.downloadResumeTR")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
