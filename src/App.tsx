import React from 'react';
import { useCountriesStore } from './store/useCountriesStore';

const App: React.FC = () => {
  const { countries, selectedCountries, toggleCountry, toggleSelectAll } = useCountriesStore();
  const handleCountryToggle = (country: string) => {
    toggleCountry(country);
  };

  const handleSelectAllToggle = () => {
    toggleSelectAll();
  };

  return (
    <div>
      <h1>Examen de Ingreso: Full Stack Senior React</h1>
      <ul style={{ listStyleType: 'none', }} >
        <input type="checkbox" checked={selectedCountries.length === countries.length} onChange={handleSelectAllToggle} />
        Select All
        {countries.map((country) => (
          <li key={country}>
            <label>
              <input
                type="checkbox"
                checked={selectedCountries.includes(country)}
                onChange={() => handleCountryToggle(country)}
              />
              {country}
            </label>
          </li>
        ))}
      </ul>
    </div >
  );
};

export default App;
