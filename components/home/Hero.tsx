export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[4px] text-sm mb-5">
            Berkshire Digital Studio
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Crafting Digital Experiences That Grow Businesses.
          </h1>

          <p className="mt-8 text-lg text-neutral-600 max-w-xl">
            We create modern websites, Shopify stores,
            mobile applications and premium digital
            experiences for ambitious businesses.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="btn-primary">
              Start Your Project
            </button>

            <button className="rounded-full border px-8 py-4">
              View Portfolio
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="h-[500px] w-[600px] rounded-3xl bg-neutral-100 shadow-2xl flex items-center justify-center">

            Website Mockup

          </div>

        </div>

      </div>

    </section>
  );
}