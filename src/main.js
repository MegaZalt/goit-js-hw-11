import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { searchImages } from './pixabay-api.js';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    const query = document.getElementById('searchQuery').value.trim();  

    if (query === "") {
     
        iziToast.error({
            title: 'Error',
            message: 'Search field cannot be empty!',
            position: 'topRight'
        });
        return;
    }
    searchImages(query);
});



function searchImages(query) {
    const apiKey = '46143804-c250369a659784c87f3539553';
    const url = `https://pixabay.com/api/?key=${46143804-c250369a659784c87f3539553}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const imageResults = document.getElementById('imageResults');
        imageResults.innerHTML = '';

        if(data.hits && data.hits.length > 0) {
            data.hits.array.forEach(image => {
                const imgElement = document.createElementa('img');
                imgElement.src = image.webformatURL;
                imgElement.alt = image.tags;
                imgElement.style.width = '200px';
                imgElement.style.margin = '10px';
                imageResults.appendChild(imgElement);
            });
        } else {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });

        }
    })
    .catch(error => {
        iziToast.error({
            title: 'Errpor',
            message: 'Something went wrong. Please try again later!',
            position: 'topRight'
        });
        console.error('Error fetching images:', error);
    });
}





