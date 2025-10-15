'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className={
        'text-small ml-40 text-blue-800 hover:cursor-pointer mt-28'
      }
      onClick={() => router.back()}
    >
      ← Tools and Examples
    </button>
  );
}
