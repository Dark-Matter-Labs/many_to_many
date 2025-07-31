import Image from 'next/image';
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
          Let yourself guide by our Field Guide
        </h2>
        <CurvedArrow className="rotate-180 transform text-orange-500" />
      </div>
      <p className="text-regular text-grey-600 my-10">
        An interactive or downloadable Field Guide.
      </p>
      <div>
        <Image
          src="/FieldGuideSample.png"
          alt="Field Guide sample"
          width={1096}
          height={657}
          className="mx-auto py-4"
        />
        <div className="mt-4 flex justify-center">
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
      </div>
    </section>
  );
}
