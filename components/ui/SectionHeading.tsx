type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/50">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-white/60 md:text-lg">{description}</p>
    </div>
  );
}
