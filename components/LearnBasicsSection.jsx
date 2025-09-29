import Link from 'next/link';
import Image from 'next/image';
import { CurvedArrow } from '@/components/CurvedArrow';
import styles from './LearnBasicsSection.module.css';

const previewPages = [
  {
    id: 1,
    title: 'Tools and example pages',
    imageSrc: '/tools.png',
  },
  {
    id: 2,
    title: 'Alerts pages',
    imageSrc: '/alerts.png',
  },
  {
    id: 3,
    title: 'Summary diagrams',
    imageSrc: '/summary.png',
  },
  {
    id: 4,
    title: 'Instruction pages',
    imageSrc: '/instruction.png',
  },
  {
    id: 5,
    title: 'Overview pages',
    imageSrc: '/overview.png',
  },
];

export default function LearnBasicsSection() {
  return (
    <section>
      <div className={'grid-bg section-shadow ' + styles.container}>
        <div className={' ' + styles.titleSection}>
          <h2 className="heading-lg text-blue-800">
            Two Ways to Discover the System
          </h2>
        </div>
        <div className="w-full px-5 py-16">
          <div className="mx-auto max-w-7xl items-center justify-center gap-16 sm:flex">
            {/* Linear Read Column */}
            <div className="relative flex flex-col items-center">
              <h2 className="heading-md mb-8 text-center text-blue-800">
                Deep Dive
              </h2>
              <div className="flex h-[511px] w-[511px] flex-col items-center rounded-full bg-gradient-to-br from-blue-800 to-blue-400 text-white">
                <div className="flex flex-col items-center justify-around gap-5">
                  <div className="-mt-2">
                    <Image
                      src="/field_guide_cover.png"
                      alt="Field Guide illustration"
                      width={380}
                      height={200}
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <p className="text-regular text-grey-50">
                    Delve into the details and be guided through
                    <br />
                    step by step with the Field Guide.
                  </p>

                  <button className="bg-grey-50 text-regular hover:bg-grey-200 flex items-center gap-1 rounded-full px-8 py-3 text-blue-800 transition-all duration-300">
                    <Link href="/M2M_System_Field_Guide.pdf">
                      Read online →
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Arrow Divider */}
            <div className="mx-5 flex flex-col items-center justify-center gap-2">
              <CurvedArrow />
              <span className="heading-md text-blue-800">or</span>
              <CurvedArrow flip />
            </div>

            {/* Interactive Tool Column */}
            <div className="relative flex flex-col items-center">
              <h2 className="heading-md mb-8 text-center text-blue-800">
                Holistic View
              </h2>
              <div className="section-shadow flex h-[511px] w-[511px] flex-col items-center rounded-full bg-white">
                <div className="flex flex-col items-center gap-5">
                  <Image
                    src="/interactive_cover.png"
                    alt="Field Guide illustration"
                    width={498.43}
                    height={219.67}
                    className="h-auto w-full object-cover"
                  />

                  <p className="text-regular text-grey-600 mb-5">
                    Explore the system as a whole and the relationship
                    <br />
                    between the parts with the interactive tool.
                  </p>

                  <button className="text-warm-grey text-regular flex items-center gap-1 rounded-full bg-blue-800 px-8 py-3 transition-all duration-300 hover:bg-blue-800/90">
                    <Link href="/overview/system-guide">Open tool →</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-xl items-center justify-center gap-4 pt-20 text-center">
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
              Read on to find which view best suits your needs
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

      <div className={'' + styles.container}>
        <div
          className={'grid grid-cols-1 sm:grid-cols-2 ' + styles.titleSection}
        >
          <div>
            <h2 className="heading-lg max-w-sm text-blue-800">
              Deep Dive - A Field Guide for Governance Practitioners
            </h2>
          </div>
          <div>
            <p className="text-regular text-grey-600 max-w-4xl">
              We created a Field Guide was specifically for Practitioners who
              are working in complex collaborations and are struggling to find
              or create suitable governance and organising structures for their
              complex work and/or who want to disrupt norms around value,
              ownership, risk and power.
            </p>
            <button className="text-warm-grey text-regular my-8 flex items-center gap-1 rounded-full bg-blue-800 px-8 py-3 transition-all duration-300 hover:bg-blue-800/90">
              <Link href="/M2M_System_Field_Guide.pdf">
                Download the Field Guide →
              </Link>
            </button>
          </div>
        </div>

        <h3 className="text-regular text-blue-800">
          Quick view in the structure and content
        </h3>
        <Image
          src="/fg_nav.png"
          alt="Field Guide navigation structure"
          width={1096}
          height={725}
          className="py-4"
        />

        <h3 className="text-regular text-blue-800">
          Preview of pages in the Field Guide
        </h3>
      </div>
      <div className="section-shadow h-full w-full pt-8 pb-[6rem]">
        <div className="">
          {/* Scrollable Container */}
          <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4">
            {previewPages.map((page, index) => (
              <div
                key={page.id}
                className="h-[348px] w-[549px] flex-none flex-shrink-0 rounded-2xl"
              >
                {/* Card */}
                <div className="p-2">
                  {/* Image Container */}
                  <div className="relative rounded-2xl shadow-[0_0_8px_0_rgba(125,125,125,1)] hover:shadow-[0_0_8px_0_rgba(0,95,255,1)]">
                    <Image
                      src={page.imageSrc}
                      alt={page.title}
                      width={549}
                      height={308}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-regular mb-1 text-blue-800">
                      {page.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={'' + styles.container}>
        <div
          className={'grid grid-cols-1 sm:grid-cols-2 ' + styles.titleSection}
        >
          <div>
            <h2 className="heading-lg max-w-sm text-blue-800">
              Holistic View: Interactive Tool to See the Parts and their
              relationality
            </h2>
          </div>
          <div>
            <p className="text-regular text-grey-600 max-w-4xl">
              The Many-to-Many System has six key layers. It's important to note
              the System simplifies a highly complex landscape, aiming to make
              these interconnected elements digestible and navigable. In
              practice, these layers aren't sequential steps with clear starts
              and stops; they are often messy, iterative, and entangled.
            </p>
            <button className="text-warm-grey text-regular my-8 flex items-center gap-1 rounded-full bg-blue-800 px-8 py-3 transition-all duration-300 hover:bg-blue-800/90">
              <Link href="/overview/system-guide">
                Explore the Interactive System →
              </Link>
            </button>
          </div>
        </div>

        <Image
          src="/interactive_preview.png"
          alt="Field Guide interactive preview"
          width={1096}
          height={725}
          className="mx-auto py-4"
        />
      </div>
    </section>
  );
}
