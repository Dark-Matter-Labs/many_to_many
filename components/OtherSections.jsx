import { SectionTitle } from './SectionTitle';

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
              What we’re really doing is removing barriers to collaboration
            </QuoteBubble>
            <QuoteBubble>
              Many-to-many is a vehicle for deploying multiple technologies that
              make complex collaborations possible
            </QuoteBubble>
            <QuoteBubble>
              I just say to people it’s collaboration contracting
            </QuoteBubble>
          </div>
        </div>
      </section>

      {/* Entry Points Section */}
      {/* <section className="px-4 py-20 text-center">
        <h2 className="font-galosText mx-auto mb-12 max-w-3xl text-xl text-blue-800">
          We understand people have different needs and need different mean to
          interact with the Many to Many System. Hence we offer different entry points:
        </h2>
        <EntryPointAnimation />
      </section> */}

      {/* Who is it for? Section */}
      <section className="grid-bg px-4 py-20">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6">
          <SectionTitle>Who is it for?</SectionTitle>
          <div className="mt-8">
            <InfoBubble>
              Find out here if Many-to-Many is for you, and how it can help you
              in your work.
            </InfoBubble>
          </div>
        </div>
      </section>
    </>
  );
};
