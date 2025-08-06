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
          It’s a bit like an alternative to both sociocracy (a governance
          system) and the CIC (a legal formation), specifically for
          [life-ennobling] futures.
        </QuoteBubble>
        <QuoteBubble>
          There are loads of people out there doing collaboration work, but what
          makes this really different is the legally binding component.
        </QuoteBubble>
      </div>
    </section>
  );
}
