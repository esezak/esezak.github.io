// SectionWrapper — wraps each section with consistent styling and Framer Motion scroll animation.
"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

/** Props for the SectionWrapper component. */
interface SectionWrapperProps {
  /** HTML id attribute for anchor-scroll navigation. */
  id: string;
  /** Section content. */
  children: ReactNode;
  /** Optional additional CSS class name. */
  className?: string;
}

/**
 * Wraps a section with consistent padding, id for nav anchoring,
 * and a fade-up entrance animation triggered on scroll.
 *
 * @param props - Component props.
 * @returns An animated section element.
 */
export const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => (
  <motion.section
    id={id}
    className={`section container ${className ?? ""}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);
