import { fetchImages } from './pixabay-api.js';
import { renderImages, toggleLoader } from './render-functions.js';

const searchForm = document.getElementById('searchForm');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

searchForm.addEventListener('submit', async (event)  {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();

    if(!query) {
        alert('Please enter a search query');
        return;
    }

loader.classList.remove('hidden');

try {
    const data = awalt fetchImages(query);
    renderGallery(data.hits);
} catch (error) {
    console.error(error);
    alert('Error loading images.')
} finally {
    loader.classList.add('hidden');
}
});

function renderGallery(images) {
    gallery.innerHTML = '';

    images.forEach(image => {
        const imEl = document.createElement('img');
        imgEl.src = image-webformatURL;
        imgEl.alt = image.tags;
        gallery.appendChild(imgEl);
    });
}