'use client';

import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="rounded rounded-r-none border border-blue-500 bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
    >
      Home
    </button>
  );
}
