'use client';

import Link from 'next/link';

interface CountryCardProps {
  countryCode: string;
  name: string;
}

export default function CountryCard({ countryCode, name }: CountryCardProps) {
  return (
    <Link key={countryCode} href={`/country/${countryCode}`}>
      <div className="cursor-pointer rounded-lg border p-4 hover:bg-gray-800">{name}</div>
    </Link>
  );
}
