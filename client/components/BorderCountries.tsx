import Link from "next/link";

interface BorderCountryProps {
  commonName: string;
  countryCode: string;
}

export default function BorderCountries({ borders }: { borders: BorderCountryProps[] }) {
  if (!borders || borders.length === 0) return <p>No border countries.</p>;

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Border Countries</h2>
      <div className="flex flex-wrap gap-2">
        {borders.map((border) => (
          <Link key={border.countryCode} href={`/country/${border.countryCode}`}>
            <span className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
              {border.commonName}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
