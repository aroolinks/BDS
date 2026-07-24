type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="rounded-[28px] border border-[#E5E5E5] bg-white p-6 md:p-8">
      <p className="text-lg leading-8 text-[#111111]">“{quote}”</p>
      <div className="mt-6 border-t border-[#E5E5E5] pt-4">
        <p className="font-semibold text-[#111111]">{name}</p>
        <p className="text-sm text-[#666666]">{role}</p>
      </div>
    </article>
  );
}
