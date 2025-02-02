import { notFound } from "next/navigation";
import BorderCountries from "@/components/BorderCountries";
import PopulationChart from "@/components/PopulationChart";
import axios from "axios";
import Image from "next/image";
import BackButton from "@/components/BackButton";

async function getCountryInfo(countryCode: string) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/country/info/${countryCode}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch country info:", error);
    return null;
  }
}

export default async function CountryInfoPage({params}: {params: {countryCode: string}}) {
  const country = await getCountryInfo(params.countryCode);
  if (!country) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <BackButton/>

      <h1 className="text-3xl font-bold">{params.countryCode.toUpperCase()}</h1>
      <Image
        src={country.flagUrl}
        alt={`${params.countryCode} flag`}
        width={256}
        height={160}
        className="my-4 object-contain"
        priority
      />
      <BorderCountries borders={country.borderCountries}/>
      <PopulationChart populationData={country.populationCounts}/>
    </div>
  );
}
