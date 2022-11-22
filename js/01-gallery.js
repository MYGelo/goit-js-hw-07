import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const newGallery = createElement(galleryItems);

galleryEl.innerHTML = ('afterbegin', newGallery);
galleryEl.addEventListener('click', onClickGalleryImg);

function createElement(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
            <a class="gallery__link" 
            href="">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>
        `;
    })
    .join('');
}

// function onEscKeyPress(e) {
//   const ESC_KEY = 'Escape';

//   const isEscKey = e.code === ESC_KEY;
//   if (isEscKey) {
//     onClickGalleryImg();
//   }
// }

function onClickGalleryImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const selectImg = e.target.dataset.source;

  const instance = basicLightbox.create(`
        <img src='${selectImg}' width='800' height='600'>
    `);

  instance.show();
}
