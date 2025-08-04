import { SectionTitle } from './SectionTitle';
import M2MAnimation from './IntroAnimation';
import EntryPointAnimation from './entry-point-animation/EntryPointAnimation';

const InfoBubble = ({ children }) => (
  <div className="font-galosText mb-4 max-w-4xl rounded-full bg-white p-20 text-xl text-blue-800 drop-shadow-sm drop-shadow-blue-800">
    {children}
  </div>
);

const QuoteBubble = ({ children }) => (
  <div className="glow-bubble text-orange-800">
    <div className="font-galosText rounded-3xl bg-white/80 p-6 text-center text-xl shadow-md backdrop-blur-sm">
      “{children}”
    </div>
  </div>
);

export const OtherSections = () => {
  return (
    <>
      {/* Who is it for? Section */}
      <section className="grid-bg px-4 py-20">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6">
          <SectionTitle>Who is it for?</SectionTitle>
          <div className="mt-8">
            <InfoBubble>
              For those into complex collaboration or stuck or just curious and
              interested we have options!
            </InfoBubble>
            <InfoBubble>
              No matter if you a practitioner, legal professional or funder - we
              have something which can help you in your work.
            </InfoBubble>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 py-20 text-center">
        <div className="animation-wrapper">
          <M2MAnimation />
        </div>
      </section>

      {/* Quotes Section */}
      <section className="grid-bg px-4 py-20">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-8">
          <SectionTitle>Quotes from partners</SectionTitle>
          <p className="text-grey-600 font-galosText text-md -mt-4 text-center">
            The project is not just abstract, a Learning Network was and is
            involved..
          </p>
          <div className="mt-4 flex flex-col gap-8 md:flex-row">
            <QuoteBubble>
              A quote by the Learning Network here one quote
            </QuoteBubble>
            <QuoteBubble>
              A quote by the Learning Network here one quote
            </QuoteBubble>
            <QuoteBubble>
              A quote by the Learning Network here one quote
            </QuoteBubble>
          </div>
        </div>
      </section>

      {/* Entry Points Section */}
      <section className="px-4 py-20 text-center">
        <h2 className="font-galosText mx-auto mb-12 max-w-3xl text-xl text-blue-800">
          We understand people have different needs and need different mean to
          interact with the Many to Many System. Hence we offer different entry points:
        </h2>
        <EntryPointAnimation />
      </section>
    </>
  );
};
