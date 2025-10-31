import Link from 'next/link';
import Image from 'next/image';
import { CurvedArrow } from '@/components/CurvedArrow';
import styles from './LearningFieldChoiceSection.module.css';

export default function LearningFieldChoiceSection() {
  return (
    <section>
      <div className={'grid-bg section-shadow ' + styles.container}>
        <div className="w-full px-5 pb-[160px]">
          <div className="mx-auto max-w-7xl items-center justify-center gap-16 sm:flex">
            {/* Case Studies Column */}
            <div className="relative flex flex-col items-center">
              <h2 className="heading text-center text-blue-800">
                Case Studies
              </h2>
              <h3 className="heading-lg text-grey-600 mb-10">From the Field</h3>
              <div className="section-shadow hover:bg-grey-50 flex h-[511px] w-[511px] flex-col items-center rounded-full bg-[#EBFDFA]">
                <div className="flex flex-col items-center gap-5">
                  <Image
                    src="/case-studies.png"
                    alt="Learning illustration"
                    width={309}
                    height={174}
                    className="h-auto object-cover"
                  />

                  <p className="text-regular text-grey-600 mb-5 max-w-sm">
                    Dive deeper into the real-world examples of complex
                    collaborations and find multiple approaches, shaped by
                    context, values, and experimentation
                  </p>

                  <button className="text-warm-grey text-regular flex items-center gap-1 rounded-full bg-blue-800 px-8 py-3 transition-all duration-300 hover:bg-blue-800/90">
                    <Link href="#case-studies">Explore Cases →</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Arrow Divider */}
            <div className="mx-5 my-8 flex flex-col items-center justify-center gap-2 sm:my-0">
              <CurvedArrow />
              <span className="heading-md text-blue-800">or</span>
              <CurvedArrow flip />
            </div>

            {/* Practitioner Insights Column */}

            <div className="relative flex flex-col items-center">
              <h2 className="heading text-center text-blue-800">Top Tips</h2>
              <h3 className="heading-lg text-grey-600 mb-10">From the Field</h3>
              <div className="flex h-[511px] w-[511px] flex-col items-center rounded-full bg-[#FFE091] text-blue-800 shadow-[0_4px_10px_rgba(0,95,255,0.30)] transition-all duration-300 hover:bg-[#FFD659]">
                <div className="flex flex-col items-center justify-around gap-5">
                  <div className="-mt-2">
                    <Image
                      src="/tips.png"
                      alt="Case study illustration"
                      width={309}
                      height={171}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <p className="text-regular max-w-sm text-blue-800">
                    Explore the top tips of practitioners working in real-world
                    contexts of people tackling complex, entangled challenges -
                    and disrupting norms in how we see value, ownership, power
                    and risk
                  </p>

                  <button className="text-regular flex items-center gap-1 rounded-full bg-blue-800 px-8 py-3 text-white transition-all duration-300 hover:bg-blue-900">
                    <Link href="#top-tips">View Tips →</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-4 pt-20">
            <Image
              src="scroll-arrow.svg"
              alt="Scroll down arrow"
              width={24}
              height={24}
            />
            <Image
              src="scroll-arrow.svg"
              alt="Scroll down arrow"
              width={24}
              height={24}
            />
            <h3 className="heading-md text-blue-800">
              Find out more below about who we are learning with, and how these
              case studies and top tips were developed
            </h3>
            <Image
              src="scroll-arrow.svg"
              alt="Scroll down arrow"
              width={24}
              height={24}
              className="rotate-y-180"
            />
            <Image
              src="scroll-arrow.svg"
              alt="Scroll down arrow"
              width={24}
              height={24}
              className="rotate-y-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
