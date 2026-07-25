import type { LucideIcon } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

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
    <TiltCard className="group h-full rounded-[28px] border border-white/10 bg-[#111111] p-6 shadow-[0_12px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5c00]/30 hover:shadow-[0_20px_60px_rgba(255,92,0,0.1)] md:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-[#ff5c00]/15 group-hover:text-[#ff5c00]">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
    </TiltCard>
  );
}
