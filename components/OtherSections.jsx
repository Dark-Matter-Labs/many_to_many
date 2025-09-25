import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

const AudienceCard = ({ icon, title, children, imgW, imgH }) => (
  <div className="whoBg flex flex-col items-center">
    {/* Icon circle */}
    <div className="pt-8">
      <Image width={imgW} height={imgH} src={icon} alt="icon" />
    </div>
    {/* Card content */}
    <div className="mb-2 px-10 pt-4 pb-10">
      <h3 className="heading-md mb-3 font-semibold text-blue-800">{title}</h3>
      <p className="text-regular text-grey-600">{children}</p>
    </div>
  </div>
);

const TestimonialBubble = ({ quote, name, organization, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="relative w-[33vw] px-[7em] py-[8em]">
      {/* top glow */}
      {/* <div className="pointer-events-none absolute -top-6 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-2xl"></div> */}

      <div className="relative">
        <p className="heading-lg text-orange-800">“{quote}”</p>
        <p className="text-small text-grey-600">{name}</p>
        <p className="text-small text-grey-600">{organization}</p>
      </div>

      {/* elliptical accent */}
      {/* <svg
        className="pointer-events-none absolute bottom-10 left-6 w-[86%] opacity-70"
        viewBox="0 0 600 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <path
          d="M40 170c40-60 330-120 480-60 68 28-10 98-130 118-160 27-372-13-350-58z"
          stroke="#D9DEE8"
          strokeWidth="6"
          filter="url(#blur)"
        />
      </svg> */}
    </div>
  </div>
);

export const OtherSections = () => {
  return (
    <>
      {/* Who is it for? Section */}
      <section className="grid-bg px-4 py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative mx-4 flex-row items-start gap-20 py-10 sm:mx-0 sm:flex">
            <SectionTitle>Who is it for?</SectionTitle>
          </div>

          {/* Three audience cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <AudienceCard
              icon="/gov_prac.svg"
              title="Governance Practitioners"
              imgH={72}
              imgW={72}
            >
              who are already working in complex collaborations and struggling
              to find or create suitable governance and organising structures
              for their complex work and/or who want to disrupt norms around
              value, ownership, risk and power.
            </AudienceCard>

            <AudienceCard
              icon="/funder.svg"
              title="Funders"
              imgH={72}
              imgW={72}
            >
              especially those seeking to disrupt these same norms or invest
              effectively in systemic change initiatives.
            </AudienceCard>

            <AudienceCard
              icon="/legal.svg"
              title="Legal and Financial Professionals"
              imgH={72}
              imgW={72}
            >
              including lawyers and accountants, whose expertise is vital for
              societal transformation, particularly around governance, legal
              structuring, and contracting.
            </AudienceCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative">
        {/* grid + gradient background */}
        <div className="grid-bg-alt pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/70 to-blue-200/60"></div>
        <div className="testBg relative">
          <div className="flex flex-col items-start justify-center md:flex-row">
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
