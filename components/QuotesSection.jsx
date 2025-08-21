export default function QuotesSection() {
  return (
    <section className={`font-galosText grid-bg`}>
      <div className="bg-grey-50 relative w-full overflow-hidden py-16">
        {/* Cloud Quotes Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-5">
          <div className="flex items-center justify-center gap-8">
            {/* Left Quote Cloud */}
            <div className="relative">
              <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <div className="text-center">
                  <p className="text-grey-600 text-sm leading-relaxed">
                    <span className="font-regular text-orange-800">
                      “It’s a bit like an alternative to both sociocracy (a
                      governance system) and the CIC (a legal formation),
                      specifically for [life-ennobling] futures”
                    </span>
                  </p>
                  <p className="text-grey-600 mt-3 text-xs">
                    – Annette Dhami,
                    <br />
                    Dark Matter Labs as part of the learning network
                  </p>
                </div>
              </div>
              {/* Small decorative cloud */}
              <div className="absolute -bottom-4 -left-8 h-20 w-20 rounded-full bg-white/80 shadow-[0_5px_20px_rgba(0,0,0,0.06)]"></div>
            </div>

            {/* Right Quote Cloud */}
            <div className="relative">
              <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <div className="text-center">
                  <p className="text-grey-600 text-sm leading-relaxed">
                    <span className="font-regular text-orange-800">
                      “There are loads of people out there doing collaboration
                      work, but what makes this really different is the legally
                      binding component”
                    </span>
                  </p>
                  <p className="text-grey-600 mt-3 text-xs">
                    – Michelle Zucker
                    <br />
                    Dark Matter Labs as part of the learning network
                  </p>
                </div>
              </div>
              {/* Small decorative cloud */}
              <div className="absolute -right-8 -bottom-4 h-24 w-24 rounded-full bg-white/80 shadow-[0_5px_20px_rgba(0,0,0,0.06)]"></div>
            </div>
          </div>

          {/* Additional decorative clouds */}
          <div className="absolute top-0 left-10 h-32 w-32 rounded-full bg-white/60 shadow-[0_5px_20px_rgba(0,0,0,0.04)]"></div>
          <div className="absolute top-0 right-10 h-28 w-28 rounded-full bg-white/60 shadow-[0_5px_20px_rgba(0,0,0,0.04)]"></div>
        </div>

        {/* Wave Pattern at Bottom */}
        <div className="absolute right-0 bottom-0 left-0 h-32">
          <svg
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
          >
            <path
              d="M0,40 C320,100 420,100 720,40 C1020,-20 1120,-20 1440,40 L1440,120 L0,120 Z"
              fill="url(#blueGradient)"
              opacity="0.8"
            />
            <defs>
              <linearGradient
                id="blueGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#bcd5ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#005fff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Grid Pattern Overlay */}
          <div
            className="absolute right-0 bottom-0 left-0 h-full opacity-40"
            style={{
              backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 4px,
                rgba(0, 95, 255, 0.1) 4px,
                rgba(0, 95, 255, 0.1) 8px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 4px,
                rgba(0, 95, 255, 0.1) 4px,
                rgba(0, 95, 255, 0.1) 8px
              )
            `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
