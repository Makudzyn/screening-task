import { notFound } from 'next/navigation';
import BorderCountries from '@/components/BorderCountries';
import PopulationChart from '@/components/PopulationChart';
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import HomeButton from '@/components/HomeButton';
import { getCountryInfo } from '@/lib/api';

export default async function CountryInfoPage({ params }: { params: { countryCode: string } }) {
  const { countryCode } = await params; // Dynamic APIs in Next 15 are Asynchronous
  const country = await getCountryInfo(countryCode);
  if (!country) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <HomeButton />
      <BackButton />

      <h1 className="text-3xl font-bold">{country.countryName}</h1>
      <div className="relative my-4 h-40 w-64 rounded border-[0.5px] border-white">
        <Image
          src={country.flagUrl}
          alt={`${countryCode} flag`}
          fill
          sizes="256px, 160px"
          className="rounded object-cover"
          priority
        />
      </div>
      <BorderCountries borders={country.borderCountries} />
      <PopulationChart populationData={country.populationCounts} />
    </div>
  );
}
