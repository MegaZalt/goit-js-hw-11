import simpleLightbox from "simplelightbox";

export function renderGallery(images) {
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

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionsDelay: 250,
    });

    lightbox.refresh();
  }

  