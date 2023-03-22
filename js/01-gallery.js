import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const markup = galleryItems.map(item => {
 return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}";
      alt="${item.description}"
    />
  </a>
</li>`
});
console.log(markup);
gallery.innerHTML = markup.join('');

gallery.addEventListener('click', (event) => {
    event.preventDefault();

});
