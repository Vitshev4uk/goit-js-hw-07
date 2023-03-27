import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(item => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
});

gallery.innerHTML = markup.join('');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250
});

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    lightbox.open();
});








