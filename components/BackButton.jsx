'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className={
        'text-small mt-28 ml-4 text-blue-800 hover:cursor-pointer lg:ml-20'
      }
      onClick={() => router.back()}
    >
      ← Tools and Examples
    </button>
  );
}
