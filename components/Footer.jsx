export default function Footer() {
  return (
    <footer className="mb-2 bg-gray-200 py-10 shadow-md shadow-orange-800">
      <p className="text-regular mx-10 my-8 text-blue-800">
        This work is part of{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://darkmatterlabs.org/"
        >
          Dark Matter Labs
        </a>
        ’ Beyond the Rules lab and under the{' '}
        <a
          rel="noopener noreferrer"
          href="https://creativecommons.org/licenses/by-nc/4.0/"
        >
          CC BY-NC
        </a>{' '}
        license.
      </p>
    </footer>
  );
}
