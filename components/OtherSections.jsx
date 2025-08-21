import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

const AudienceCard = ({ icon, title, children, imgW, imgH }) => (
  <div className="whoBg flex flex-col items-center">
    {/* Icon circle */}
    <div className="pt-12">
      <Image width={imgW} height={imgH} src={icon} alt="icon" />
    </div>
    {/* Card content */}
    <div className="p-12">
      <h3 className="heading-md mb-3 font-semibold text-blue-600">{title}</h3>
      <p className="text-regular text-grey-600">{children}</p>
    </div>
  </div>
);

const TestimonialBubble = ({ quote, name, organization }) => (
  <div className="relative">
    <div className="rounded-[999px] bg-white p-[4em] w-[452px] h-[452px] shadow-lg">
      <p className="heading-lg mb-4 text-orange-800">“{quote}”</p>
      <p className="text-small text-grey-600">{name}</p>
      <p className="text-small text-grey-600">{organization}</p>
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
            <AudienceCard icon="/gov_prac.svg" title="Governance Practitioners" imgH={20} imgW={40}>
              who are already working in complex collaborations and struggling
              to find or create suitable governance and organising structures
              for their complex work and/or who want to disrupt norms around
              value, ownership, risk and power.
            </AudienceCard>

            <AudienceCard icon="/funder.svg" title="Funders" imgH={52} imgW={52}>
              especially those seeking to disrupt these same norms or invest
              effectively in systemic change initiatives.
            </AudienceCard>

            <AudienceCard
              icon="/legal.svg"
              title="Legal and Financial Professionals"
              imgH={52} imgW={52}
            >
              including lawyers and accountants, whose expertise is vital for
              societal transformation, particularly around governance, legal
              structuring, and contracting.
            </AudienceCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 px-4 pt-40 pb-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-0 md:grid-cols-3">
            <TestimonialBubble
              quote="What we’re really doing is removing the barriers of collaboration"
              name="Zahra Davidson"
              organization="Huddlecraft"
            />

            <TestimonialBubble
              quote="Many-to-many is a vehicle for deploying multiple technologies that make complex collaborations possible"
              name="Matt Bell"
              organization="Plymouth Octopus"
            />

            <TestimonialBubble
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
