@param {Array} Image

export function renderImage(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images
    .map(image => {
        return `
        <div class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </a>
        </div>`;
    })
    .join('');
        gallery.innerHTML = markup;
    
}