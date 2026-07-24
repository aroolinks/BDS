import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group h-full rounded-[28px] border border-[#E5E5E5] bg-white p-6 shadow-[0_12px_50px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#111111] hover:shadow-[0_20px_80px_rgba(17,17,17,0.08)] md:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white transition-transform duration-300 group-hover:scale-105">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-[#111111]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#666666]">{description}</p>
    </article>
  );
}
