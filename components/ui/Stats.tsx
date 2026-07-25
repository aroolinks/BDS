type StatsProps = {
  value: string;
  label: string;
};

export default function Stats({ value, label }: StatsProps) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#111111] p-6 text-center">
      <div className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {value}
      </div>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  );
}
