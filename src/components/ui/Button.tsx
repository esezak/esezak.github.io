// Button — styled button/link component with primary and outline variants.
import { type ReactNode } from "react";

/** Props for the Button component. */
interface ButtonProps {
  /** Button content (text, icon, etc.). */
  children: ReactNode;
  /** Visual variant of the button. */
  variant?: "primary" | "outline";
  /** Optional URL — renders an anchor tag instead of a button when provided. */
  href?: string;
  /** If true and href is set, opens in a new tab. */
  external?: boolean;
  /** Optional click handler (only for button mode). */
  onClick?: () => void;
  /** Optional additional CSS class name. */
  className?: string;
  /** If true and href is set, triggers a file download instead of navigation. */
  download?: boolean;
}

/**
 * Renders a styled button or anchor link.
 * When `href` is provided, renders as an `<a>` tag; otherwise renders a `<button>`.
 *
 * @param props - Component props.
 * @returns A styled button or anchor element.
 */
export const Button = ({
  children,
  variant = "primary",
  href,
  external,
  onClick,
  className,
  download,
}: ButtonProps) => {
  const classes = `btn btn-${variant} ${className ?? ""}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
};
