import { Country } from "./types";

export async function fetchCountries(): Promise<Country[] | undefined> {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags"
    );
    const data = await response.json();
    return data as Country[];
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
