// Two ways into the page (prototype v15, 5 Nov 2026): follow one journey, or
// look across all three archetypes at once.

const WAYS = [
  {
    href: '#journey',
    eyebrow: 'Start from a moment where you got stuck',
    title: 'Follow the journey',
    body: 'The life of a philanthropy-funded collaboration, stage by stage. Each stage opens the patterns that tend to crystallise there, and the cards behind them.',
  },
  {
    href: '#browse',
    eyebrow: 'Look across collaborations',
    title: 'Browse all patterns',
    body: 'Every pattern we hold, across all three archetypes, filtered by the Field Guide’s five infrastructure elements. Or read the rules and readings that sit behind them.',
  },
];

export default function WaysIn() {
  return (
    <section aria-labelledby="ways-in-title" className="py-16">
      <div className="container-main">
        <h2 id="ways-in-title" className="heading-md mb-8 text-blue-800">
          Two ways in
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {WAYS.map((way) => (
            <li key={way.href}>
              <a
                href={way.href}
                className="flex h-full flex-col rounded-2xl border border-blue-400 bg-white p-6 transition-colors hover:border-blue-800"
              >
                <span className="tag mb-2 tracking-wide text-grey-600 uppercase">
                  {way.eyebrow}
                </span>
                <span className="heading-sm mb-3 text-blue-800">
                  {way.title}
                </span>
                <span className="text-regular text-grey-600">{way.body}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
