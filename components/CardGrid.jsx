'use client';

import { useEffect, useRef, useState, useCallback, memo } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Card = memo(
  ({ title, description, buttonText, url, gradient, index = 0 }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, []);

    const handleMouseEnter = useCallback(() => setHovering(true), []);
    const handleMouseLeave = useCallback(() => setHovering(false), []);

    // Respect user preference for reduced motion
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const updatePreference = () =>
        setPrefersReducedMotion(mediaQuery.matches);
      updatePreference();
      mediaQuery.addEventListener?.('change', updatePreference);
      return () => mediaQuery.removeEventListener?.('change', updatePreference);
    }, []);

    // Reveal on first intersection with optional stagger
    useEffect(() => {
      if (prefersReducedMotion) {
        setIsVisible(true);
        return;
      }

      const node = cardRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.15,
        },
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, [prefersReducedMotion]);

    return (
      <div
        ref={cardRef}
        className={`will-change-opacity relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_8px_rgba(90,99,90,0.3)] transition-all duration-500 ease-out will-change-transform hover:shadow-blue-800 ${
          isVisible || prefersReducedMotion
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
        }`}
        style={{
          transitionDelay: prefersReducedMotion ? undefined : `${index * 90}ms`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          className="font-galosText text-warm-grey hover:bg-dark-blue relative z-10 mt-4 inline-flex items-center gap-2 self-start rounded-full bg-blue-800 px-5 py-2 transition-colors"
        >
          {buttonText} <ArrowRight size={16} />
        </Link>
      </div>
    );
  },
);

Card.displayName = 'Card';

const cardData = [
  {
    title: 'Discover the System',
    description:
      'Here you will find an overview of the Many-to-Many System in it’s entirety and a downloadable Field Guide that supports governance practitioners.',
    buttonText: 'Delve into the system',
    url: '/discover-the-system',
    gradient: 'bg-gradient-to-b from-[#FA691A] to-white',
  },
  {
    title: 'Navigate Challenges',
    description:
      'Have you got a specific governance problem that you need to solve? Explore how this system might help.',
    buttonText: 'Check out the challenges',
    url: '/navigate-challenges',
    gradient: 'bg-gradient-to-t from-[#59FF7F] to-white',
  },
  {
    title: 'Tools and Examples',
    description:
      'Explore a library of practical tools, actionable frameworks, and real-world examples designed to support putting theory into practice.',
    buttonText: 'Explore the tools',
    url: '/tools',
    gradient: 'bg-gradient-to-l from-[#DFA2FF] to-white',
  },
  {
    title: 'Legal Architecture',
    description:
      'Find our learnings about complex collaboration legal architectures and tools and resources to help navigate the complexities.',
    buttonText: 'See the legal architecture',
    url: '/legal-architecture',
    gradient: 'bg-gradient-to-r from-[#AECCFF] to-white',
  },
  {
    title: 'Learnings from the Field',
    description:
      'Explore real-world case studies where people are tackling complex, entangled challenges.',
    buttonText: 'See the learnings',
    url: '/learnings-from-the-field',
    gradient: 'bg-gradient-to-t from-[#FFE091] to-white',
  },
  {
    title: 'Journey and Team',
    description:
      'Discover the story behind the work — the origin story, the core team, the ecosystem of partners, and the emergent process that brought this work to life.',
    buttonText: 'Learn about the journey',
    url: '/journey',
    gradient: 'bg-gradient-to-t from-[#D6FF90] to-white',
  },
];

export const CardGrid = () => {
  return (
    <section className="section-shadow mb-2 py-[160px]">
      <div className="container-main">
        <div className="relative mx-4 flex-row items-start justify-between gap-20 py-10 sm:mx-0 sm:flex">
          <div>
            <h2 className="heading text-blue-800">
              Exploring the <br />
              Many-to-Many System
            </h2>
          </div>
          <div>
            <p className="text-regular text-grey-600 m-auto max-w-xl pb-4">
              The Many-to-Many System distills two years of learning,
              prototyping, research, and practice. Here we offer a blend of
              elements: a core framework, practical insights and learnings,
              illustrative models for complex topics, and tools developed along
              the way.
            </p>
            <p className="text-regular text-grey-600 m-auto mb-10 max-w-xl">
              Our aspiration is to provide a range of resources that can help
              others embed the Many-to-Many deep code shifts into their own
              complex collaboration work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card key={index} index={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
