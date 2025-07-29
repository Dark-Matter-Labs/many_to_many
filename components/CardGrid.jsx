import { ArrowRight } from 'lucide-react';

const Card = ({ title, description, buttonText, gradient }) => (
  <div
    className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-lg`}
  >
    <div
      className={`absolute bottom-0 left-0 h-1/2 w-full ${gradient} opacity-50 blur-3xl filter`}
    ></div>
    <div className="relative z-10">
      <h3 className="font-galosText mb-3 text-xl text-blue-600">{title}</h3>
      <div className="text-grey-600 font-galosText text-sm leading-relaxed">
        {description}
      </div>
    </div>
    <a
      href="#"
      className="font-galosText text-warm-gray relative z-10 mt-4 inline-flex items-center gap-2 self-start rounded-full bg-blue-800 px-5 py-2 transition-colors hover:bg-blue-700"
    >
      {buttonText} <ArrowRight size={16} />
    </a>
  </div>
);

const cardData = [
  {
    title: 'M2M System Overview',
    description: 'Here you will find the Field Guide!',
    buttonText: 'go to the system guide',
    gradient: 'bg-gradient-to-t from-green-300 to-blue-300',
  },
  {
    title: 'Problems that M2M can solve',
    description:
      'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    buttonText: 'go through the stories',
    gradient: 'bg-gradient-to-t from-pink-300 to-purple-300',
  },
  {
    title: 'M2M Legal tools by topic',
    description:
      'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    buttonText: 'go through the stories',
    gradient: 'bg-gradient-to-t from-cyan-300 to-blue-300',
  },
  {
    title: 'Journey of how this was created and partner Network',
    description:
      'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    buttonText: 'explore -',
    gradient: 'bg-gradient-to-t from-yellow-300 to-orange-300',
  },
  {
    title: 'Learn by yourself',
    description: (
      <>
        <p>
          <strong>Practical Tools & Examples</strong>
        </p>
        <p>
          <strong>Deep Code Shifts</strong>
        </p>
      </>
    ),
    buttonText: 'explore -',
    gradient: 'bg-gradient-to-t from-yellow-200 to-lime-300',
  },
  {
    title: 'Community',
    description:
      'Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.',
    buttonText: 'explore -',
    gradient: 'bg-gradient-to-t from-sky-300 to-indigo-300',
  },
];

export const CardGrid = () => {
  return (
    <section className="grid-bg px-4 py-20 md:px-8">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="font-galosText mb-2 text-center text-2xl text-blue-800">
          Now you brave soul, go and have fun ✨
        </h2>
        <p className="font-galosText text-md text-grey-600 mb-12 text-center">
          All options to explore, dive deep, learn, just click here or in the
          menu
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
