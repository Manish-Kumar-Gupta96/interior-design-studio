import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface StudioButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "dark" | "light" | "outline";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

function StudioButton({
  children,
  href,
  type = "button",
  variant = "dark",
  className = "",
  onClick,
  ariaLabel
}: StudioButtonProps) {
  const classes = [
    "studio-button",
    `studio-button-${variant}`,
    className
  ]
    .filter(Boolean)
    .join(" ");

  const buttonContent = (
    <>
      <span>{children}</span>
      <span className="studio-button-icon" aria-hidden="true">
        ↗
      </span>
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link
          to={href}
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {buttonContent}
    </button>
  );
}

export default StudioButton;
