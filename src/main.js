import { fetchImages } from './pixabay-api.js';
import { renderImages, toggleLoader } from './render-functions.js';

const searchForm = document.getElementById('searchForm');
const queryInput = document.getElementById('query');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = queryInput.value.trim();
    if(!query) {
        alert()
    }



