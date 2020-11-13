import API from './fetchCountries';
import error from './error-message.js';
import getRefs from './get-refs.js';
import countryCardTpl from '../templates/country-card.hbs'
import countriesListTpl from '../templates/countries-list.hbs';

const refs = getRefs();
const debounce = require('lodash.debounce');

refs.searchForm.addEventListener('input', debounce(onInput, 500));

function renderCountryListMarkup(data) {
  const markup = countriesListTpl(data);
  refs.cardContainer.innerHTML = markup;
}

function renderCountryCardMarkup(data) {
  const markup = countryCardTpl(data);
  refs.cardContainer.innerHTML = markup;
}

function clearMarkup() {
  refs.cardContainer.innerHTML = '';
}

function onInput(evt) {
  evt.preventDefault();
  const searchQuery = evt.target.value;

  if (!searchQuery) {
    clearMarkup();
    return;
  }

    API.fetchCountries(searchQuery)
        .then(renderCountryCard)
        .catch(error.onFetchError)
        .finally(clearMarkup());
}

function renderCountryCard(data) {
  if (data.length === 1) {
    renderCountryCardMarkup(data);
    return;
  }
  if (data.length > 1 && data.length <= 10) {
    renderCountryListMarkup(data);
    return;
  }
  if (data.length > 10) {
    clearMarkup();
    error.matchesError();
    return;
  }
}

function renderCountryListMarkup(data) {
  const markup = countriesListTpl(data);
  refs.cardContainer.innerHTML = markup;
}

function renderCountryCardMarkup(data) {
  const markup = countryCardTpl(data);
  refs.cardContainer.innerHTML = markup;
}

function clearMarkup() {
  refs.cardContainer.innerHTML = '';
}
