import { galleries } from '../data/gallery-data.js';

export function renderGalleryCards() {
  const galleryCards = document.querySelector('.gallery-grid');
  if (!galleryCards) return;

  galleryCards.innerHTML = Object.entries(galleries)
    .map(([key, gallery]) => {
      return `
        <div class="gallery-box" onclick="window.openGallery('${key}')">
          <img src="${gallery.photos[0]}" alt="${gallery.title}">
          <span>${gallery.title}</span>
        </div>
      `;
    })
    .join('');
}

export function getGalleryData(type) {
  return galleries[type];
}

export function getGalleryOrder() {
  return Object.keys(galleries);
}
