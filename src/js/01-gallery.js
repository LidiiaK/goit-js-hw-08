// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
// import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector(".gallery");

function createGallery(arrey) {
    return arrey.reduce((acc, elem) => acc + `
        <a href="${elem.original}"><img src="${elem.preview}" alt="" title="${elem.description}" /></a>
    `, [])
}
const result = createGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", result);


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
