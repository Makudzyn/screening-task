// Available Countries
export interface AvailableCountriesResponse {
  countryCode: string;
  name: string;
}

// Country Border Info
export interface CountryBordersInfoResponse {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: BorderCountry[];
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

// Country Population
export interface CountryPopulationResponse {
  error: boolean;
  msg: string;
  data: PopulationData;
}

export interface PopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCounts[];
}

export interface PopulationCounts {
  year: number;
  value: number;
}

// Country Flag
export interface CountryFlagResponse {
  error: boolean;
  msg: string;
  data: CountryFlagData;
}

export interface CountryFlagData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

// Country Info response
export interface CountryInfoResponse {
  borderCountries: BorderCountry[];
  populationCounts: PopulationCounts[];
  flagUrl: string;
}
