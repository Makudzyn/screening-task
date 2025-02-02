import axios from "axios";
import CountryCard from "@/components/CountryCard";

async function getCountries() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/country/available-countries`);
  return res.data;
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Countries List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {countries.map((country: {countryCode: string; name: string}) => (
          <CountryCard key={country.countryCode} countryCode={country.countryCode} name={country.name} />
        ))}
      </div>
    </div>
  );
}
