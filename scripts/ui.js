import { getGalleryData } from './gallery.js';

export function openGallery(type) {
  const data = getGalleryData(type);
  if (!data) return;

  const titleEl = document.getElementById('lb-title');
  const grid = document.getElementById('lb-grid');
  if (!titleEl || !grid) return;

  titleEl.textContent = data.title;
  grid.innerHTML = data.photos
    .map(
      (src, i) =>
        `<img src="${src}" alt="${data.title} Image ${i + 1}" onclick="window.openViewer(${i}, '${type}')">`
    )
    .join('');

  currentPhotos = data.photos;
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeLightbox(e) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  if (!e || e.target === lightbox || e.target.classList.contains('lb-close')) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

let currentPhotos = [];
let currentIndex = 0;

export function openViewer(index, type) {
  currentIndex = index;
  const gallery = getGalleryData(type);
  if (!gallery) return;

  currentPhotos = gallery.photos;

  const viewerImg = document.getElementById('viewerImg');
  const imgViewer = document.getElementById('imgViewer');
  if (viewerImg && imgViewer) {
    viewerImg.src = currentPhotos[currentIndex];
    imgViewer.classList.add('active');
  }
}

export function closeViewer() {
  const imgViewer = document.getElementById('imgViewer');
  if (imgViewer) imgViewer.classList.remove('active');
}

export function openShopModal() {
  const shopModal = document.getElementById('shopModal');
  if (!shopModal) return;
  shopModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeShopModal(e) {
  const shopModal = document.getElementById('shopModal');
  if (!shopModal) return;

  if (!e || e.target === shopModal || e.target.classList.contains('lb-close')) {
    shopModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

export function changeImg(dir, e) {
  if (e) e.stopPropagation();
  if (!currentPhotos.length) return;

  currentIndex = (currentIndex + dir + currentPhotos.length) % currentPhotos.length;
  const viewerImg = document.getElementById('viewerImg');
  if (viewerImg) viewerImg.src = currentPhotos[currentIndex];
}
