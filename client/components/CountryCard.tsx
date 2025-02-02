'use client';

import Link from "next/link";

interface CountryCardProps {
  countryCode: string;
  name: string;
}

export default function CountryCard({ countryCode, name }: CountryCardProps) {
  return (
    <Link key={countryCode} href={`/country/${countryCode}`}>
      <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100">
        {name}
      </div>
    </Link>
  );
};