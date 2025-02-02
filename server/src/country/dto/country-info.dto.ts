import {
  BorderCountry,
  CountryInfoResponse,
  PopulationCounts,
} from '../country.interface';

export class CountryInfoResponseDto implements CountryInfoResponse {
  countryName: string;
  borderCountries: BorderCountry[];
  populationCounts: PopulationCounts[];
  flagUrl: string;
}
