// country.interface.ts

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  area: number;
  borders?: string[];
  maps: {
    googleMaps: string;
  };
  languages: Object;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  flags: {
    png: string;
  };
  cca3: string;
}
