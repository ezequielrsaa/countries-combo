import create from 'zustand';

type CountriesStore = {
  selectedCountries: string[];
  toggleCountry: (country: string) => void;
  toggleSelectAll: () => void;
  countries: string[];
};

//lista de países de ejemplo, deberían traerse con un fetch por ejemplo de una base de datos, api 
const countries = ['India','USA','France']

export const useCountriesStore = create<CountriesStore>((set) => ({
  countries,
  selectedCountries: [],
  toggleCountry: (country:string) =>
    set((state) => ({
      selectedCountries: state.selectedCountries.includes(country)
        ? state.selectedCountries.filter((c) => c !== country)
        : [...state.selectedCountries, country],
    })),
  toggleSelectAll: () =>
    set((state) => ({
      selectedCountries: state.selectedCountries.length === countries.length ? [] : countries,
    }))
}));
