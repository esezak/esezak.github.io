// Badge — small tag component used for skills and tech stack labels.

/** Props for the Badge component. */
interface BadgeProps {
  /** Text label displayed inside the badge. */
  label: string;
}

/**
 * Renders a styled badge pill for skill or technology tags.
 *
 * @param props - Component props.
 * @returns A span element styled as a badge.
 */
export const Badge = ({ label }: BadgeProps) => (
  <span className="badge">{label}</span>
);
