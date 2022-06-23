// Source:

const countryCodesWithImage = [
  "Pamplona",
  "Madrid",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    name: "Pamplona",
    code: "Pamplona",
    longitude: -1.65299999,
    latitude: 42.81299972,
  },
  {
  name: "MADRID",
  code: "MADRID",
  longitude: -3.69096946,
  latitude: 40.44221878,
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code)
);

export const smallCountryLimit = 5000;
export const bigEnoughCountriesWithImage = countriesWithImage; // note: removed "small country" filtering from here

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
