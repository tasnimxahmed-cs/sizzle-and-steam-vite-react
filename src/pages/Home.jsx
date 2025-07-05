export default function Home() {
  return (
    <section
      className="relative h-[85vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/images/chicken-skewers.jpg')" }}
    >
      <title>Sizzle & Steam | Home</title>
      <div className="absolute inset-0 bg-dark bg-opacity-60" style={{ backgroundColor: "rgba(16, 15, 15, 0.6)" }} />
      
      <div className="relative text-center px-6 sm:px-8 md:px-0 max-w-4xl mx-auto">
        <h1
          className="text-7xl font-logo leading-tight"
          style={{ color: "var(--color-brand)" }}
        >
          SIZZLE <span className="text-white mx-1">&</span> STEAM
        </h1>
        <p className="mt-3 text-2xl font-medium text-white max-w-xl mx-auto">
          Flame. Flavor. Fresh Off the Street.
        </p>
      </div>
    </section>
  );
}

