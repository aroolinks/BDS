type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-[#111111] p-6 md:p-8">
      <p className="text-lg leading-8 text-white">“{quote}”</p>
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </article>
  );
}
