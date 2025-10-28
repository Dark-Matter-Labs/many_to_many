import Image from 'next/image';
import Link from 'next/link';
import { CurvedArrow } from './CurvedArrow';
import styles from './FieldGuideSection.module.css';
export default function FieldGuideSection() {
  return (
    <section className={styles.container}>
      <div
        className={
          'flex flex-col items-center justify-center gap-2' +
          styles.titleSection
        }
      >
        <CurvedArrow className="rotate-180 transform text-orange-500" />
        <h2 className="font-galosText text-center text-2xl text-blue-800">
          A Field Guide for Governance Practitioners
        </h2>
        <CurvedArrow className="rotate-180 transform text-orange-500" flip />
      </div>
      <p className="text-regular text-grey-600 mx-auto my-10 max-w-4xl text-left">
        We created a Field Guide specifically for Practitioners who are
        working in complex collaborations and are struggling to find or create
        suitable governance and organising structures for their complex work
        and/or who want to disrupt norms around value, ownership, risk and
        power.
      </p>
      <div>
        <Image
          src="/FieldGuideSample.png"
          alt="Field Guide sample"
          width={1096}
          height={657}
          className="mx-auto py-4"
        />
        <div className="my-4 flex justify-center">
          <Image
            src="/FieldSampleSmall1.png"
            alt="Field Guide Sample 1"
            width={542}
            height={306}
            className="mx-2"
          />
          <Image
            src="/FieldSampleSmall2.png"
            alt="Field Guide Sample 1"
            width={542}
            height={306}
            className="mx-2"
          />
        </div>
        <Link
          href="/M2M_System_Field_Guide.pdf"
          className={'font-galosText mx-10 ' + styles.ctaButton}
        >
          Download the Field Guide
        </Link>
      </div>
    </section>
  );
}
