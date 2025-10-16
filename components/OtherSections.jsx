const TestimonialBubble = ({ quote, name, organization, className = '' }) => (
  <div
    className={`h-[486px] w-[501px] relative -mx-4 rounded-full bg-white shadow-[0_0_20px_0_rgba(0,95,255,0.40)] ${className}`}
  >
    <div className="relative max-w-lg mx-auto px-[8em] py-[6em]">
      <div className="relative">
        <p className="heading-lg text-orange-800">“{quote}”</p>
        <p className="text-small text-grey-600">{name}</p>
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
        <div className="pointer-events-none absolute inset-0 h-[50%] bg-blue-400"></div>
        <div className="relative py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialBubble
              className=""
              quote="What we’re really doing is removing the barriers of collaboration"
              name="Zahra Davidson"
              organization="Huddlecraft"
            />

            <TestimonialBubble
              className=""
              quote="Many-to-many is a vehicle for deploying multiple technologies that make complex collaborations possible"
              name="Matt Bell"
              organization="Plymouth Octopus"
            />

            <TestimonialBubble
              className=""
              quote="I just say to people it's collaboration contracting"
              name="James Lock"
              organization="We Are Opus"
            />
          </div>
        </div>
      </section>
    </>
  );
};
