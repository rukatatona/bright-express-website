export default function BrightExpressLogisticsLandingPage() {
  const features = [
    "Great pay packages to build your life around",
    "Modern equipment to keep you safe and comfortable",
    "A truck driving career path to grow with",
    "A truck purchasing program to take your destiny into your hands",
  ];

  const equipment = [
    { icon: "❄️", title: "Refrigerator" },
    { icon: "🔌", title: "Power Inverter" },
    { icon: "🌡️", title: "Cabin Climate Control" },
    { icon: "🖥️", title: "Flat-Panel TV Mount" },
    { icon: "🛏️", title: "Ample Sleeper Room" },
    { icon: "🛡️", title: "State-of-the-Art Safety Technology" },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      <header className="fixed top-0 z-50 w-full bg-[#16233d]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black uppercase tracking-tight text-red-500">
              System
            </div>
            <div className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-white/70 sm:block">
              Transport
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#jobs" className="transition hover:text-red-400">
              Jobs
            </a>
            <a href="#equipment" className="transition hover:text-red-400">
              Services
            </a>
            <a href="#contact" className="transition hover:text-red-400">
              Call Me
            </a>
            <a href="#about" className="transition hover:text-red-400">
              Track Load
            </a>
          </nav>

          <button className="rounded-none bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-red-700">
            Apply Now
          </button>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#16233d] pt-24 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(7,12,26,0.76), rgba(7,12,26,0.76)), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.18),transparent_42%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
                Bright Express Logistics LLC
              </p>
              <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Bright Express Logistics LLC – Class A CDL Driving Jobs
              </h1>
              <p className="mt-8 text-xl leading-9 text-white/85 sm:text-2xl">
                Our professional CDL Flatbed Drivers enjoy
              </p>

              <div className="mt-8 space-y-5 text-xl leading-9 text-white/90 sm:text-2xl">
                {features.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="mt-1 text-white/70">—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <button className="border border-red-600 bg-red-600 px-8 py-5 text-base font-bold uppercase tracking-[0.16em] text-white transition hover:bg-red-700">
                  Find CDL Jobs
                </button>
                <button className="border border-white px-8 py-5 text-base font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#16233d]">
                  Contact a Recruiter
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold">Start Your Application</h2>
                <p className="mt-3 text-white/75">
                  Join a fleet that invests in drivers, equipment, and long-term
                  success.
                </p>
                <div className="mt-8 space-y-4">
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                    placeholder="Full name"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                    placeholder="Phone number"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                    placeholder="Email address"
                  />
                  <select className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none">
                    <option className="text-black">Experience level</option>
                    <option className="text-black">New CDL holder</option>
                    <option className="text-black">1–2 years</option>
                    <option className="text-black">3+ years</option>
                  </select>
                </div>
                <button className="mt-6 w-full rounded-2xl bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-700">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="equipment" className="bg-[#f3f3f3] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              Our Equipment Commitment
            </h2>
            <p className="mt-8 max-w-6xl text-2xl leading-10 text-neutral-700">
              It’s more than a truck, it’s your livelihood and your home on the
              road. That’s why we take our equipment so seriously. Our fleet’s
              average truck age is just 2.5 years, and most feature premium
              comforts and safety technology built for life on the road.
            </p>

            <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
              {equipment.map((item) => (
                <div key={item.title} className="flex items-center gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black text-3xl text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-5xl font-black tracking-tight sm:text-7xl">
              We Are Bright Express Logistics LLC
            </h2>
            <p className="mx-auto mt-10 max-w-6xl text-left text-2xl leading-10 text-neutral-700 lg:text-center">
              We are the flatbed trucking company that continually invests in
              our team, our trucks and our technology. Your success is what
              we’re all about.
            </p>
          </div>

          <div className="mx-auto mt-20 max-w-7xl overflow-hidden rounded-[2rem] bg-[#16233d] shadow-2xl">
            <div
              className="relative min-h-[480px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(22,35,61,0.56), rgba(22,35,61,0.56)), url('https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=1600&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(239,68,68,0.42),transparent_38%)]" />
              <div className="relative flex min-h-[480px] flex-col justify-end px-8 py-10 sm:px-14 sm:py-14">
                <p className="text-lg font-semibold uppercase tracking-[0.25em] text-red-300">
                  Driver Success Story
                </p>
                <h3 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
                  Flatbed Customer Success
                </h3>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
                  Built on strong support, reliable equipment, and a career path
                  drivers can grow with.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="jobs"
          className="bg-neutral-950 px-6 py-24 text-white lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
                Bright Express Logistics LLC Careers
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Join Bright Express Logistics LLC Today
              </h2>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-white/75">
                Explore open Class A CDL opportunities, connect with a
                recruiter, and start building a career with better equipment and
                stronger support.
              </p>
            </div>
            <div
              id="contact"
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                  placeholder="First name"
                />
                <input
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                  placeholder="Last name"
                />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                  placeholder="Phone"
                />
                <input
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="mt-4 min-h-[140px] w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
                placeholder="Tell us about your experience"
              />
              <button className="mt-5 w-full rounded-2xl bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-red-700">
                Contact a Recruiter
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
