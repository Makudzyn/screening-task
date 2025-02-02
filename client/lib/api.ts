import axios from 'axios';
import { AvailableCountriesResponse, CountryInfoResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAvailableCountries(): Promise<AvailableCountriesResponse[]> {
  try {
    const res = await axios.get(`${API_URL}/country/available-countries`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch available countries:', error);
    return [];
  }
}

export async function getCountryInfo(countryCode: string): Promise<CountryInfoResponse | null> {
  try {
    const res = await axios.get(`${API_URL}/country/info/${countryCode}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch info for country ${countryCode}:`, error);
    return null;
  }
}
