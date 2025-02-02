import {
  BorderCountry,
  CountryInfoResponse,
  PopulationCounts,
} from '../country.interface';

export class CountryInfoResponseDto implements CountryInfoResponse {
  borderCountries: BorderCountry[];
  populationCounts: PopulationCounts[];
  flagUrl: string;
}
