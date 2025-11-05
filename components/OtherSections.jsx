const TestimonialBubble = ({ quote, name, organization, className = '' }) => (
  <div
    className={`relative -mx-4 h-[386px] w-[401px] rounded-full bg-white shadow-[0_0_20px_0_rgba(0,95,255,0.40)] sm:h-[486px] sm:w-[501px] ${className}`}
  >
    <div className="relative mx-auto max-w-lg px-[3em] py-[6em] sm:px-[8em]">
      <div className="relative">
        <p className="heading-lg text-orange-800">“{quote}”</p>
        <p className="text-small text-grey-600 pt-2">{name}</p>
        <p className="text-small text-grey-600">{organization}</p>
      </div>
    </div>
  </div>
);

export const OtherSections = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="grid-bg relative">
        {/* grid + gradient background */}
        <div className="pointer-events-none absolute inset-0 h-[100%] bg-blue-400 lg:h-[50%]"></div>
        <div className="relative py-10">
          <div className="grid grid-cols-1 content-center justify-items-center gap-8 lg:grid-cols-3">
            <TestimonialBubble
              className=""
              quote="What we’re really doing is removing the barriers of collaboration"
              name="Zahra Davidson"
              organization="Huddlecraft"
            />

            <TestimonialBubble
              className=""
              quote="Many-to-Many is a vehicle for deploying multiple technologies that make complex collaborations possible"
              name="James Lock"
              organization="We Are Opus"
            />

            <TestimonialBubble
              className=""
              quote="I just say to people it's collaboration contracting"
              name="Matt Bell"
              organization="Plymouth Octopus"
            />
          </div>
        </div>
      </section>
    </>
  );
};
