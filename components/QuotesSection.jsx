export default function QuotesSection() {
  return (
    <section className={`font-galosText relative`}>
      {/* grid background */}
      <div className="grid-bg absolute inset-0 bg-gradient-to-b from-transparent to-blue-300/50"></div>

      <div className="relative mx-auto max-w-screen-2xl px-5 py-24">
        <div className="relative items-end justify-between gap-0 sm:flex">
          {/* left small bubble */}
          <div className="relative hidden h-[220px] w-[220px] rounded-full bg-white shadow-[0_14px_44px_rgba(21,45,92,0.18)] md:block"></div>

          {/* center large bubble with quote */}
          <div className="relative -mb-10 h-[540px] w-[540px] rounded-full bg-white shadow-[0_20px_60px_rgba(21,45,92,0.18)]">
            <div className="absolute inset-0 flex items-center justify-center p-14">
              <div>
                <p className="heading-lg mb-6 max-w-[380px] text-orange-800">
                  “It’s a bit like an alternative to both sociocracy (a
                  governance system) and the CIC (a legal formation),
                  specifically for [life-ennobling] futures”
                </p>
                <p className="text-small text-grey-600">– Annette Dhami</p>
                <p className="text-small text-grey-600">
                  Dark Matter Labs as part of the learning network
                </p>
              </div>
            </div>
          </div>

          {/* right large bubble with quote */}
          <div className="relative -mb-16 h-[540px] w-[540px] rounded-full bg-white shadow-[0_20px_60px_rgba(21,45,92,0.18)]">
            <div className="absolute inset-0 flex items-center justify-center p-14">
              <div>
                <p className="heading-lg mb-6 max-w-[380px] text-orange-800">
                  “There are loads of people out there doing collaboration work,
                  but what makes this really different is the legally binding
                  component”
                </p>
                <p className="text-small text-grey-600">– Michelle Zucker</p>
                <p className="text-small text-grey-600">
                  {' '}
                  Dark Matter Labs as part of the learning network
                </p>
              </div>
            </div>
          </div>

          {/* rightmost small bubble */}
          <div className="relative hidden h-[220px] w-[220px] rounded-full bg-white shadow-[0_14px_44px_rgba(21,45,92,0.18)] md:block"></div>
        </div>
      </div>
    </section>
  );
}
