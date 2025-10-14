export default function Footer() {
  return (
    <footer className="bg-blue-400 pb-[300px]">
      <section className="bg-grey-50 rounded-[261px] px-20 py-20 shadow-[0_0_20px_rgba(0,95,255,0.40)] lg:px-0">
        <div className="container-main">
          <div className="sm:grid sm:grid-cols-2 sm:gap-8">
            <div>
              <h2 className="heading-lg pb-4 text-blue-800">
                Attribution of Many-to-Many work
              </h2>
            </div>
            <div>
              <p className="text-small text-blue-800">
                We are delighted you want to use and adapt our work! This is
                exactly why we've made it available under a Creative Commons
                license. When attributing, we'd appreciate it if you could:
              </p>
              <ol className="text-small mt-4 ml-1 list-inside list-decimal space-y-2 text-blue-800">
                <li>
                  Name the work: e.g., "the Many-to-Many System" or "the
                  Many-to-Many Field Guide" or “Experimenter’s Log”.
                </li>
                <li>
                  Include a link: A hyperlink back to our website is the most
                  valuable part of any attribution, as it allows others to
                  discover the work for themselves.
                </li>
                <li>
                  Specify that the work is licensed under a{' '}
                  <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    CC BY-NC
                  </a>{' '}
                  license.
                </li>
              </ol>
              <p className="text-small mt-4 text-blue-800">
                For example: 'This concept is adapted from the Many-to-Many
                Field Guide [https://www.manytomany.systems/].'
              </p>
              <p className="text-small mt-4 text-blue-800">
                Thank you for being part of this learning journey!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container-main">
        <p className="text-small my-8 text-blue-800">
          This work is part of{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://darkmatterlabs.org/"
          >
            Dark Matter Labs
          </a>
          ’ Beyond the Rules Lab.
        </p>
      </div>
    </footer>
  );
}
