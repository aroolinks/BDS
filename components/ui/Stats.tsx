type StatsProps = {
  value: string;
  label: string;
};

export default function Stats({ value, label }: StatsProps) {
  return (
    <div className="rounded-[24px] border border-[#E5E5E5] bg-white p-6 text-center">
      <div className="text-4xl font-semibold tracking-[-0.04em] text-[#111111] md:text-5xl">
        {value}
      </div>
      <p className="mt-2 text-sm text-[#666666]">{label}</p>
    </div>
  );
}
