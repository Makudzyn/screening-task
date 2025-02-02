import { AvailableCountriesResponse } from '../country.interface';

export class AvailableCountriesResponseDto
  implements AvailableCountriesResponse
{
  countryCode: string;
  name: string;
}
