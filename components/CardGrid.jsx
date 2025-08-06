import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, description, buttonText, url, gradient }) => (
  <div
    className={`relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 drop-shadow-sm drop-shadow-blue-800`}
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
    <Link
      href={url}
      className="font-galosText text-warm-grey relative z-10 mt-4 inline-flex items-center gap-2 self-start rounded-full bg-blue-800 px-5 py-2 transition-colors hover:bg-blue-700"
    >
      {buttonText} <ArrowRight size={16} />
    </Link>
  </div>
);

const cardData = [
  {
    title: 'Overview',
    description:
      'Here you will find an overview of the Many-to-Many System in it’s entirety and a downloadable Field Guide that supports governance practitioners.',
    buttonText: 'Delve into the System',
    url: '/overview',
    gradient: 'bg-gradient-to-t from-green-300 to-blue-300',
  },
  {
    title: 'Tools, Case Studies and Examples',
    description:
      'Here we’ve collected the practical tools we developed and created case studies and examples.',
    buttonText: 'Explore the tools',
    url: '/tools',
    gradient: 'bg-gradient-to-t from-yellow-200 to-lime-300',
  },
  {
    title: 'Challenges that Many-to-Many aims to address',
    description:
      'Have you got a specific governance problem that you need to solve? Explore how this system might help.',
    buttonText: 'Check out the common challenges',
    url: '/problems',
    gradient: 'bg-gradient-to-t from-pink-300 to-purple-300',
  },
  {
    title: 'Community',
    description:
      'Join our community to connect with others, share experiences, and collaborate on projects.',
    buttonText: 'Join the community',
    url: '/community',
    gradient: 'bg-gradient-to-t from-sky-300 to-indigo-300',
  },
  {
    title: 'How And Who Created This',
    description:
      'Explore the journey of how this system was created and the partners involved.',
    buttonText: 'Learn about the journey',
    url: '/journey',
    gradient: 'bg-gradient-to-t from-yellow-300 to-orange-300',
  },
  {
    title: 'Many-to-Many Legal Architecture',
    description:
      'Find our learnings about complex collaboration legal architectures and tools and resources to help navigate the complexities.',
    buttonText: 'See the Legal Considerations',
    url: '/legal-tools',
    gradient: 'bg-gradient-to-t from-cyan-300 to-blue-300',
  },
];

export const CardGrid = () => {
  return (
    <section className="grid-bg px-4 py-20 md:px-8">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="font-galosText text-center text-2xl text-blue-800">
          Exploring the Many-to-Many System
        </h2>
        <p className="text-regular text-grey-600 m-auto mt-10 max-w-4xl pb-4">
          The Many-to-Many System distills two years of learning, prototyping,
          research, and practice.
        </p>
        <p className="text-regular text-grey-600 m-auto mb-10 max-w-4xl">
          Our focus was to create a blend: a core framework, practical learnings
          and insights, illustrative models for complex topics, and tools
          developed along the way. The aspiration is that these elements will
          support others in embedding the Many-to-Many deep code shifts into
          their own complex collaboration work.
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
