'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className={
        'text-small ml-40 font-bold text-blue-800 hover:cursor-pointer'
      }
      onClick={() => router.back()}
    >
      ← BACK
    </button>
  );
}
