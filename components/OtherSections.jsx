import { SectionTitle } from "./SectionTitle";

const InfoBubble = ({ children }) => (
  <div className="bg-white rounded-full p-20 drop-shadow-sm drop-shadow-blue-800 max-w-4xl text-blue-800 font-galosText text-xl mb-4">
    {children}
  </div>
);

const QuoteBubble = ({ children }) => (
  <div className="glow-bubble text-orange-800">
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-md font-galosText text-xl text-center">
      “{children}”
    </div>
  </div>
);

export const OtherSections = () => {
  return (
    <>
      {/* Who is it for? Section */}
      <section className="py-20 px-4 grid-bg">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-6">
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
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl font-galosText text-blue-800 max-w-3xl mx-auto mb-12">
          Welcome to our digital home for the Many-to-Many (M2M) System.
        </h2>
        <div className="relative w-full max-w-md mx-auto h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40">
              <div className="absolute -inset-8 bg-orange-400 rounded-full filter blur-2xl opacity-50"></div>
              <div className="absolute -inset-8 left-8 bg-blue-400 rounded-full filter blur-2xl opacity-50"></div>
              <div className="absolute inset-0 bg-blue-600 flex items-end justify-center rounded-t-full rounded-b-lg">
                <div className="w-1/2 h-1/2 bg-orange-500 rounded-tl-full"></div>
              </div>
            </div>
          </div>
          <span className="absolute top-[20%] left-[5%] font-bold text-gray-500  font-galosText">
            many
          </span>
          <span className="absolute top-[50%] left-[10%] font-bold text-gray-500  font-galosText">
            many
          </span>
          <span className="absolute top-[10%] right-[10%] font-bold text-gray-500  font-galosText">
            Many-to-Many System
          </span>
          <span className="absolute top-[40%] right-[5%] font-bold text-gray-500  font-galosText">
            many
          </span>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-4 grid-bg">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-8">
          <SectionTitle>Quotes from partners</SectionTitle>
          <p className="text-center text-grey-600  font-galosText text-md -mt-4">
            The project is not just abstract, a Learning Network was and is
            involved..
          </p>
          <div className="flex flex-col md:flex-row gap-8 mt-4">
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
      <section className="py-20 px-4 text-center">
        <h2 className="font-galosText text-xl text-blue-800 max-w-3xl mx-auto mb-12">
          We understand people have different needs and need different mean to
          interact with the M2M System. Hence we offer different entry points:
        </h2>
        <div className="relative flex justify-center items-center h-48">
          <div className="absolute bg-orange-500/80 text-white p-4 rounded-full shadow-lg  font-galosText text-sm text-center glow-bubble cursor-pointer">
            Click on the blue <br /> dot! once the <br /> animation ends <br />{" "}
            click here
          </div>
          <div className="absolute right-[30%] bg-blue-600 w-32 h-32 rounded-full filter blur-2xl animate-pulse"></div>
        </div>
      </section>
    </>
  );
};
