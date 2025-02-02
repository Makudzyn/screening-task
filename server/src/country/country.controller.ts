import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';
import { AvailableCountriesResponseDto } from './dto/available-countries.dto';
import { CountryInfoResponseDto } from './dto/country-info.dto';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('available-countries')
  async getAvailableCountries(): Promise<AvailableCountriesResponseDto[]> {
    return this.countryService.getAvailableCountries();
  }

  @Get('info/:countryCode')
  async getCountryInfo(
    @Param('countryCode') countryCode: string,
  ): Promise<CountryInfoResponseDto> {
    return this.countryService.getCountryInfo(countryCode);
  }
}
