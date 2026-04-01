interface SectionHeadingProps {
  kicker: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">{kicker}</span>
      <div className="max-w-3xl space-y-3">
        <h2 className="display-title text-4xl text-ink sm:text-5xl">{title}</h2>
        <p className="text-sm leading-7 text-ink-muted sm:text-base">{description}</p>
      </div>
    </div>
  );
}
