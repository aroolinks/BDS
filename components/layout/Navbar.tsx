export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        <div className="text-2xl font-bold tracking-tight">
          Berkshire Digital Studio
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="btn-primary">
          Get Started
        </button>
      </div>
    </header>
  );
}