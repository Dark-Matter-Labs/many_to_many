import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

const AudienceCard = ({ icon, title, children, imgW, imgH }) => (
  <div className="whoBg flex flex-col items-center">
    {/* Icon circle */}
    <div className="pt-12">
      <Image width={imgW} height={imgH} src={icon} alt="icon" />
    </div>
    {/* Card content */}
    <div className="p-10">
      <h3 className="heading-md mb-3 font-semibold text-blue-600">{title}</h3>
      <p className="text-regular text-grey-600">{children}</p>
    </div>
  </div>
);

const TestimonialBubble = ({ quote, name, organization, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="relative flex h-[72vw] w-[72vw] items-center justify-center rounded-full bg-white p-10 shadow-[0_20px_60px_rgba(21,45,92,0.18)] md:h-[32vw] md:w-[32vw] md:p-12 lg:h-[480px] lg:w-[480px] lg:p-14">
      {/* top glow */}
      {/* <div className="pointer-events-none absolute -top-6 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-2xl"></div> */}

      <div className="relative">
        <p className="heading-lg mb-6 max-w-[380px] text-orange-800">
          “{quote}”
        </p>
        <p className="text-small text-grey-600">{name}</p>
        <p className="text-small text-grey-600">{organization}</p>
      </div>

      {/* elliptical accent */}
      <svg
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
      </svg>
    </div>
  </div>
);

export const OtherSections = () => {
  return (
    <>
      {/* Who is it for? Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 px-4 py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative mx-4 flex-row items-start justify-around gap-20 py-10 sm:mx-0 sm:flex">
            <SectionTitle>Who is it for?</SectionTitle>
            <p className="text-regular max-w-md text-gray-600">
              We believe there are three key audiences for the Many-to-Many
              System.
            </p>
          </div>

          {/* Three audience cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <AudienceCard
              icon="/gov_prac.svg"
              title="Governance Practitioners"
              imgH={20}
              imgW={40}
            >
              who are already working in complex collaborations and struggling
              to find or create suitable governance and organising structures
              for their complex work and/or who want to disrupt norms around
              value, ownership, risk and power.
            </AudienceCard>

            <AudienceCard
              icon="/funder.svg"
              title="Funders"
              imgH={62}
              imgW={62}
            >
              especially those seeking to disrupt these same norms or invest
              effectively in systemic change initiatives.
            </AudienceCard>

            <AudienceCard
              icon="/legal.svg"
              title="Legal and Financial Professionals"
              imgH={62}
              imgW={62}
            >
              including lawyers and accountants, whose expertise is vital for
              societal transformation, particularly around governance, legal
              structuring, and contracting.
            </AudienceCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-4 pt-32 pb-24">
        {/* grid + gradient background */}
        <div className="grid-bg pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/70 to-blue-200/60"></div>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-0">
            <TestimonialBubble
              className="md:-mr-2"
              quote="What we’re really doing is removing the barriers of collaboration"
              name="Zahra Davidson"
              organization="Huddlecraft"
            />

            <TestimonialBubble
              className="md:-mx-2"
              quote="Many-to-many is a vehicle for deploying multiple technologies that make complex collaborations possible"
              name="Matt Bell"
              organization="Plymouth Octopus"
            />

            <TestimonialBubble
              className="md:-ml-2"
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
