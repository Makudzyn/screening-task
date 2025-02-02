import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios, { AxiosResponse, AxiosError } from 'axios';
import {
  BorderCountry,
  CountryFlagResponse,
  CountryBordersInfoResponse,
  CountryPopulationResponse,
  PopulationCounts,
  CountryInfoResponse,
  AvailableCountriesResponse,
} from './country.interface';

@Injectable()
export class CountryService {
  private readonly dateNagerApi = 'https://date.nager.at/api/v3';
  private readonly countriesNowApi =
    'https://countriesnow.space/api/v0.1/countries';

  async getAvailableCountries(): Promise<AvailableCountriesResponse[]> {
    try {
      const res: AxiosResponse<AvailableCountriesResponse[]> = await axios.get(
        `${this.dateNagerApi}/AvailableCountries`,
      );
      return res.data;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch available countries: ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCountryInfo(countryCode: string): Promise<CountryInfoResponse> {
    try {
      const countryInfoResponse: AxiosResponse<CountryBordersInfoResponse> =
        await axios.get(`${this.dateNagerApi}/CountryInfo/${countryCode}`);

      const countryName = countryInfoResponse.data.commonName;

      // Border countries
      const borderCountries: BorderCountry[] =
        countryInfoResponse.data.borders || [];

      // Population data
      const populationResponse: AxiosResponse<CountryPopulationResponse> =
        await axios.post(`${this.countriesNowApi}/population`, {
          country: countryName,
        });

      // Check if population data is available
      if (!populationResponse.data.data.populationCounts) {
        throw new HttpException(
          'Population data not found',
          HttpStatus.NOT_FOUND,
        );
      }
      const populationCounts: PopulationCounts[] =
        populationResponse.data.data.populationCounts;

      // Flag URL
      const flagResponse: AxiosResponse<CountryFlagResponse> = await axios.post(
        `${this.countriesNowApi}/flag/images`,
        {
          country: countryName,
        },
      );

      // Check if flag URL is available
      if (!flagResponse.data.data.flag) {
        throw new HttpException('Flag URL not found', HttpStatus.NOT_FOUND);
      }
      const flagUrl = flagResponse.data.data.flag;

      return {
        countryName,
        borderCountries,
        populationCounts,
        flagUrl,
      };
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 404) {
        throw new HttpException('Country not found', HttpStatus.NOT_FOUND);
      }

      throw new HttpException(
        'Failed to fetch country info',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
