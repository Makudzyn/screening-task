export interface AvailableCountriesResponse {
  countryCode: string;
  name: string;
}

export interface CountryInfoResponse {
  countryName: string;
  borderCountries: BorderCountry[];
  populationCounts: PopulationCounts[];
  flagUrl: string;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

export interface PopulationCounts {
  year: number;
  value: number;
}
