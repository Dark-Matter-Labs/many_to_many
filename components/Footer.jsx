export default function Footer() {
  return (
    <footer className="bg-[#FFFEFE]">
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
        ’ Beyond the Rules Lab and under the{' '}
        <a
          rel="noopener noreferrer"
          href="https://creativecommons.org/licenses/by-nc/4.0/"
        >
          CC BY-NC
        </a>{' '}
        license.
        </p>
      </div>
      <div className="h-[4px] shadow-[0_0_20px_0_rgba(250,105,26,1))]"></div>
    </footer>
  );
}
