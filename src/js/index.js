// import str from './models/Search';
// // import { add as a, multiply as m, ID } from './views/searchView';
// import * as searchView from './views/searchView';

// console.log(`Using imported functions! ${searchView.add(searchView.ID,2)} and ${searchView.multiply(3,5)}. ${str}`);

// forkify-api.herokuapp.com/api/search?q=${this.query}
// https://forkify-api.herokuapp.com/api/get?rId=${this.id}


import Search from './models/Search';

/**
 * Global state of the app
 * - search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

const controlSearch = async () => {
  // 1, get the query from view
  const query = 'pizza';//TODO
  if (query) {
    // 2, new search object and add to state
    state.search = new Search(query);

    // 3, prepare UI for results
    // 4, search for recipes
    await state.search.getResults();

    // 5, render results on UI
    console.log(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();

})

const search = new Search('pizza');
console.log(search);
search.getResults();