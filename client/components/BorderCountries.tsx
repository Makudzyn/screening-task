import Link from 'next/link';

interface BorderCountryProps {
  commonName: string;
  countryCode: string;
}

export default function BorderCountries({ borders }: { borders: BorderCountryProps[] }) {
  if (!borders || borders.length === 0) return <p>No border countries.</p>;

  return (
    <div className="mt-4">
      <h2 className="mb-2 text-xl font-semibold">Border Countries</h2>
      <div className="flex flex-wrap gap-2">
        {borders.map((border) => (
          <Link key={border.countryCode} href={`/country/${border.countryCode}`}>
            <span className="cursor-pointer rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600">
              {border.commonName}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
