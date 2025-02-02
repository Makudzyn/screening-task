import CountryCard from '@/components/CountryCard';
import { getAvailableCountries } from '@/lib/api';

export default async function Home() {
  const countries = await getAvailableCountries();

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">Countries List</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {countries.map((country: { countryCode: string; name: string }) => (
          <CountryCard
            key={country.countryCode}
            countryCode={country.countryCode}
            name={country.name}
          />
        ))}
      </div>
    </div>
  );
}
