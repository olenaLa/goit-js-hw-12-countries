import {error} from '@pnotify/core';
import getRefs from "./get-refs.js";

function matchesError() {
    error(`Too many matches found.
    Please enter a more specific query!`, 1000);
  }

function onFetchError() {
  error(`No such country. Please enter another query!`, 1000);
}

function hideError() {
  const errorMsg = document.querySelector(".pnotify-container");
  if (errorMsg) {
    errorMsg.classList.add("hidden");
  }
}

export default { matchesError, onFetchError };