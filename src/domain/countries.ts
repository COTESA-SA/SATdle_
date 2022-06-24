// Source:

const countryCodesWithImage = [
  "Pamplona",
  "Altdorf",
  "Amsterdam",
  "Ancona",
  "Andorra",
  "Antwerpen",
  "Aosta",
  "Appenzell",
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
    name: "Altdorf",
    code: "Altdorf",
    longitude: 8.6379995,
    latitude: 46.8790016,
  },
  {
    name: "Amsterdam",
    code: "Amsterdam",
    longitude: 4.88969,
    latitude: 52.374,
  },
  {
    name: "Ancona",
    code: "Ancona",
    longitude: 13.515999,
    latitude: 43.6209983,
  },
  {
    name: "Andorra",
    code: "Andorra",
    longitude: 1.516667,
    latitude: 42.5,
  },
  {
    name: "Antwerpen",
    code: "Antwerpen",
    longitude: 4.402771,
    latitude: 51.260197,
  },
  {
    name: "Aosta",
    code: "Aosta",
    longitude: 7.313076,
    latitude: 45.734955,
  },
  {
    name: "Appenzell",
    code: "Appenzell",
    longitude: 9.408623,
    latitude: 47.3314175,
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
