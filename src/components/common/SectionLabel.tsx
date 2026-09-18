import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`eyebrow ${className}`}>
      {children}
    </span>
  );
}

export default SectionLabel;
