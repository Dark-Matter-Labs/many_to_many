'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, description, buttonText, url, gradient }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 drop-shadow-sm hover:drop-shadow-blue-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Cursor-follow radial glow */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${gradient} bg-none`}
        // ^ `gradient` provides Tailwind's --tw-gradient-from/--tw-gradient-to vars.
        // `bg-none` avoids Tailwind's linear gradient overriding our radial one.
        style={{
          opacity: hovering ? 0.9 : 0,
          background: `radial-gradient(240px 240px at ${pos.x}px ${pos.y}px, var(--tw-gradient-from), var(--tw-gradient-to) 60%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Ambient bottom blur (your original) */}
      <div
        className={`absolute bottom-0 left-0 h-1/2 w-full ${gradient} opacity-50 blur-3xl`}
      />

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
};

const cardData = [
  {
    title: 'Discover the System',
    description:
      'Here you will find an overview of the Many-to-Many System in it’s entirety and a downloadable Field Guide that supports governance practitioners.',
    buttonText: 'Delve into the System',
    url: '/overview',
    gradient: 'bg-gradient-to-b from-white to-[#FA691A]',
  },
  {
    title: 'Tools, Case Studies and Examples',
    description:
      'Here we’ve collected the practical tools we developed and created case studies and examples.',
    buttonText: 'Explore the tools',
    url: '/tools',
    gradient: 'bg-gradient-to-l from-[#E6B7FF] to-white',
  },
  {
    title: 'Challenges that Many-to-Many aims to address',
    description:
      'Have you got a specific governance problem that you need to solve? Explore how this system might help.',
    buttonText: 'Check out the common challenges',
    url: '/problems',
    gradient: 'bg-gradient-to-t from-[#91FF89] to-white',
  },
  {
    title: 'Learnings from the Field',
    description:
      'Join a community of practice and explore our collective learnings from the field as we continue to test and refine the Many-to-Many System.',
    buttonText: 'See the learnings',
    url: '/community',
    gradient: 'bg-gradient-to-t from-[#FFEF89] to-white',
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
    gradient: 'bg-gradient-to-r from-[#89E7FF] to-white',
  },
];

export const CardGrid = () => {
  return (
    <section className="section-shadow mb-2 py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative mx-4 flex-row items-start justify-around gap-20 py-10 sm:mx-0 sm:flex">
          <div>
            <h2 className="heading text-blue-800">
              Exploring the <br />
              Many-to-Many System
            </h2>
          </div>
          <div>
            <p className="text-regular text-grey-600 m-auto max-w-xl pb-4">
              The Many-to-Many System distills two years of learning,
              prototyping, research, and practice.
            </p>
            <p className="text-regular text-grey-600 m-auto mb-10 max-w-xl">
              Our focus was to create a blend: a core framework, practical
              learnings and insights, illustrative models for complex topics,
              and tools developed along the way. The aspiration is that these
              elements will support others in embedding the Many-to-Many deep
              code shifts into their own complex collaboration work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
