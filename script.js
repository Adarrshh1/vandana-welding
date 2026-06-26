import { renderGalleryCards } from './scripts/gallery.js';
import { openGallery, closeLightbox, openViewer, closeViewer, changeImg, openShopModal, closeShopModal } from './scripts/ui.js';
import { submitForm } from './scripts/form.js';

window.openGallery = openGallery;
window.openViewer = openViewer;
window.changeImg = changeImg;
window.closeLightbox = closeLightbox;
window.openShopModal = openShopModal;
window.closeShopModal = closeShopModal;
window.submitForm = submitForm;

window.addEventListener('DOMContentLoaded', () => {
  renderGalleryCards();
  document.getElementById('quoteForm')?.addEventListener('submit', submitForm);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeViewer();
      closeLightbox();
      closeShopModal();
    }
    if (e.key === 'ArrowRight') changeImg(1);
    if (e.key === 'ArrowLeft') changeImg(-1);
  });
});
