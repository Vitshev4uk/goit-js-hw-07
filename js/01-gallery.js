import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const markup = galleryItems.map(item => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
});
console.log(markup);
gallery.innerHTML = markup.join('');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = event.target.dataset.source;
  console.log(imageSrc);

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="1400" height="1000">
  `);

  instance.show();
});