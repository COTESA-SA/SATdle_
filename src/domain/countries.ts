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
  "Arlon",
  "Barcelona",
  "Basel",
  "Luxembourg",
  "Madrid",
  "Merida",
  "Oviedo",
  "Paris",
  "Toledo",
  "Valencia",
  "Zaragoza",
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
  {
    name: "Arlon",
    code: "Arlon",
    longitude: 5.816699,
    latitude: 49.6833,
  },
  {
    name: "Barcelona",
    code: "Barcelona",
    longitude: 2.15899991,
    latitude: 41.3580017,
  },
  {
    name: "Basel",
    code: "Basel",
    longitude: 7.588576,
    latitude: 47.559601,
  },
  {
    name: "Luxembourg",
    code: "Luxembourg",
    longitude: 6.131935,
    latitude: 49.611622,
  },
  {
    name: "Madrid",
    code: "Madrid",
    longitude: -3.6909694,
    latitude: 40.4422187,
  },
  {
    name: "Merida",
    code: "Merida",
    longitude: -6.3379998,
    latitude: 38.9119987,
  },
  {
    name: "Oviedo",
    code: "Oviedo",
    longitude: -5.84476,
    latitude: 43.36029,
  },
  {
    name: "Paris",
    code: "Paris",
    longitude: 2.349014,
    latitude: 48.864716,
  },
  {
    name: "Toledo",
    code: "Toledo",
    longitude: -4.02263,
    latitude: 39.8581,
  },
  {
    name: "Valencia",
    code: "Valencia",
    longitude: -0.375,
    latitude: 39.466667,
  },
  {
    name: "Zaragoza",
    code: "Zaragoza",
    longitude: -0.887712,
    latitude: 41.649693,
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
