// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const galleryCard = galleryItems.map(({ preview, description, original }) => {
    return ` 
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div> `;
}).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryCard);

let gallery = new SimpleLightbox('.gallery a');
console.log(gallery)
gallery.options.captionsData = 'alt';
gallery.options.captionDelay = '250';


