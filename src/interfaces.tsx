export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: { official: string; common: string }
    }
  };
  cca3: string;
  flags: { svg: string; png: string };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  tld?: string[];
  currencies?: {
    [key: string]: { name: string; symbol: string }
  };
  languages?: { [key: string]: string };
  borders?: string[];
}