import styles from './QuotesSection.module.css';

export default function QuotesSection() {
  const QuoteBubble = ({ children }) => (
    <div className="glow-bubble text-orange-800">
      <div className="font-galosText rounded-3xl bg-white/80 p-6 text-center text-xl shadow-md backdrop-blur-sm">
        “{children}”
      </div>
    </div>
  );

  return (
    <section className={`${styles.container} grid-bg`}>
      <div className="mt-4 flex flex-col gap-8 md:flex-row">
        <QuoteBubble>
          A quote by the Learning Network here one quote
        </QuoteBubble>
        <QuoteBubble>
          A quote by the Learning Network here one quote
        </QuoteBubble>
        <QuoteBubble>
          A quote by the Learning Network here one quote
        </QuoteBubble>
      </div>
    </section>
  );
}
