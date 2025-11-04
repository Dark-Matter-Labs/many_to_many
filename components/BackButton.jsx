'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className={'text-small mt-28 ml-4 lg:ml-20 text-blue-800 hover:cursor-pointer'}
      onClick={() => router.back()}
    >
      ← Tools and Examples
    </button>
  );
}
