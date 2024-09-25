
export function renderImage(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    if(images.length === 0) {
      gallery.innerHTML = '<p>Sorry, there are no images matching your search query. Please try again!</p>';
      return;
    }

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

  export function toggleLoader(isVisible) {
    const loader = document.getElementById('loader');
    if(isVisible) {
      loader.classList.remove('hidden');
    } else {
      loader.classList.add('hidden');
    }
  }