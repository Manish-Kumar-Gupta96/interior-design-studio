interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = ""
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const darkClass = dark ? "section-heading-dark" : "";

  return (
    <div className={`section-heading-wrapper ${alignClass} ${darkClass} ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-3" data-aos="fade-up">
          {eyebrow}
        </span>
      )}
      <h2 
        className="section-title mb-4" 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        {title}
      </h2>
      {description && (
        <p 
          className="section-description mt-3" 
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
