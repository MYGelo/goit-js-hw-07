import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const newGallery = createElement(galleryItems);

galleryEl.innerHTML = ('afterbegin', newGallery);
galleryEl.addEventListener('click', onClickGalleryImg);

function createElement(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__item" 
            href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                data-source="${original}"
                />
                </a>
            </li>
        `;
    })
    .join('');
}
function onClickGalleryImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  preloading: true,
  captionPosition: 'bottom',
});
console.log(galleryItems);
