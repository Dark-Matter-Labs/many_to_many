import { Navbar } from '@/components/Navbar';

export default function CommunityPage() {
  return (
    <div>
      <Navbar activePage="Community" />
      <main>
        <h1 className="heading text-blue-800">Learnings from the Field</h1>
        <p className="text-regular mt-40 ml-20 text-gray-600">Coming soon!</p>
        {/* Additional content can be added here */}
      </main>
    </div>
  );
}
