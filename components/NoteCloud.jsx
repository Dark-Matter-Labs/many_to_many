import styles from './NoteCloud.module.css';
export default function NoteCloud() {
  return (
    <section className={`${styles.container} grid-bg`}>
      <div className={'learnBg mx-20 px-4 py-20'}>
        <div className={styles.cloudContent}>
          <div
            className={
              'font-galosText text-md max-w-24 text-blue-800 ' + styles.noteBox
            }
          >
            NOTE: those are in progress learnings...
          </div>
          <p className={'text-regular text-grey-600 ' + styles.mainText}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent.
          </p>
          <div
            className={
              'font-galosText text-md max-w-24 text-blue-800 ' +
              styles.learningBox
            }
          >
            Learning by the Learning Network
          </div>
        </div>
      </div>
    </section>
  );
}
