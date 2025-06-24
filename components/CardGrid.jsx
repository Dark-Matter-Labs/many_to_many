import { ArrowRight } from "lucide-react";

const Card = ({ title, description, buttonText, gradient }) => (
  <div
    className={`relative flex flex-col justify-between p-6 rounded-2xl bg-white shadow-lg overflow-hidden min-h-[300px]`}
  >
    <div
      className={`absolute bottom-0 left-0 w-full h-1/2 ${gradient} opacity-50 filter blur-3xl`}
    ></div>
    <div className="relative z-10">
      <h3 className="text-xl font-galosText text-blue-600 mb-3">{title}</h3>
      <div className="text-grey-600  font-galosText text-sm leading-relaxed">
        {description}
      </div>
    </div>
    <a
      href="#"
      className=" font-galosText relative z-10 mt-4 self-start inline-flex items-center gap-2 px-5 py-2 text-warm-gray bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
    >
      {buttonText} <ArrowRight size={16} />
    </a>
  </div>
);

const cardData = [
  {
    title: "M2M System Overview",
    description: "Here you will find the Field Guide!",
    buttonText: "go to the system guide",
    gradient: "bg-gradient-to-t from-green-300 to-blue-300",
  },
  {
    title: "Problems that M2M can solve",
    description:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.",
    buttonText: "go through the stories",
    gradient: "bg-gradient-to-t from-pink-300 to-purple-300",
  },
  {
    title: "M2M Legal tools by topic",
    description:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.",
    buttonText: "go through the stories",
    gradient: "bg-gradient-to-t from-cyan-300 to-blue-300",
  },
  {
    title: "Journey of how this was created and partner Network",
    description:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.",
    buttonText: "explore -",
    gradient: "bg-gradient-to-t from-yellow-300 to-orange-300",
  },
  {
    title: "Learn by yourself",
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
    buttonText: "explore -",
    gradient: "bg-gradient-to-t from-yellow-200 to-lime-300",
  },
  {
    title: "Community",
    description:
      "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.",
    buttonText: "explore -",
    gradient: "bg-gradient-to-t from-sky-300 to-indigo-300",
  },
];

export const CardGrid = () => {
  return (
    <section className="py-20 px-4 md:px-8 grid-bg">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-galosText text-blue-800 text-center mb-2">
          Now you brave soul, go and have fun ✨
        </h2>
        <p className=" font-galosText text-center text-md text-grey-600 mb-12">
          All options to explore, dive deep, learn, just click here or in the
          menu
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
