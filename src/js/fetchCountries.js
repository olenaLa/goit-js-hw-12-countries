const BASE_URL = 'https://restcountries.eu/rest';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/v2/name/${name}`).then(response => {
    if (response.status === 404) return;
    return response.json();
  });
}

export default {fetchCountries};