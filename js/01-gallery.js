import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

gallery.addEventListener('click', (event) => {
    console.log('click on gallery')
})

const image = galleryItems.map(item => {
    

});
