const galleries = {
    steel: {
        title: "🔩 Steel Gate Work",
        photos: [
            "Gates/Steel /FB_IMG_1610274405443.jpg",
            "Gates/Steel /IMG-20220221-WA0009.jpg",
            "Gates/Steel /IMG-20220525-WA0018.jpg",
            "Gates/Steel /IMG-20230203-WA0022.jpg",
            "Gates/Steel /IMG-20240731-WA0007.jpg",
            "Gates/Steel /IMG-20250103-WA0211.jpg",
            "Gates/Steel /IMG-20250311-WA0010.jpg",
            "Gates/Steel /IMG_20181208_132241.jpg",
            "Gates/Steel /IMG_20191110_161521_BURST1.jpg",
            "Gates/Steel /IMG_20201225_160256.jpg",
            "Gates/Steel /IMG_20240104_132535.jpg"
        ]
    },
    iron: {
        title: "⚙️ Iron Gate Work",
        photos: [
            "Gates/iron/IMG-20211012-WA0006.jpg",
            "Gates/iron/IMG-20250323-WA0015.jpg",
            "Gates/iron/IMG-20250815-WA0010.jpg",
            "Gates/iron/IMG_20220722_150428.jpg",
            "Gates/iron/IMG_20250326_121022.jpg",
            "Gates/iron/IMG_20250402_142022.jpg",
            "Gates/iron/IMG_20250921_140153.jpg",
            "Gates/iron/IMG_20251107_115925.jpg"
        ]
    },
    railing: {
        title: "🛗 Railing Work",
        photos: [
            "Gates/railing/IMG-20221229-WA0025.jpg",
            "Gates/railing/IMG-20230408-WA0005.jpg",
            "Gates/railing/IMG-20250415-WA0017.jpg",
            "Gates/railing/IMG-20250827-WA0012.jpg",
            "Gates/railing/IMG_20210724_173137.jpg",
            "Gates/railing/IMG_20221101_093207.jpg"
        ]
    },
    shed: {
        title: "🏗️ Shed Work",
        photos: [
            "Gates/shed/IMG-20210128-WA0009.jpg",
            "Gates/shed/IMG-20221008-WA0022.jpg",
            "Gates/shed/IMG-20221029-WA0011.jpg",
            "Gates/shed/IMG-20230520-WA0017.jpg",
            "Gates/shed/IMG-20230520-WA0027.jpg",
            "Gates/shed/IMG-20240523-WA0017.jpg",
            "Gates/shed/IMG-20240523-WA0026.jpg"
        ]
    }
};

let currentPhotos = [];
let currentIndex = 0;

function openGallery(type) {
    const data = galleries[type];
    document.getElementById('lb-title').textContent = data.title;
    const grid = document.getElementById('lb-grid');
    grid.innerHTML = data.photos.map((src, i) =>
        `<img src="${src}" alt="" onclick="openViewer(${i}, '${type}')">`
    ).join('');
    currentPhotos = data.photos;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
    if (!e || e.target === document.getElementById('lightbox') || e.target.classList.contains('lb-close')) {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openViewer(index, type) {
    currentIndex = index;
    currentPhotos = galleries[type].photos;
    document.getElementById('viewerImg').src = currentPhotos[currentIndex];
    document.getElementById('imgViewer').classList.add('active');
}

function closeViewer() {
    document.getElementById('imgViewer').classList.remove('active');
}

function changeImg(dir, e) {
    if (e) e.stopPropagation();
    currentIndex = (currentIndex + dir + currentPhotos.length) % currentPhotos.length;
    document.getElementById('viewerImg').src = currentPhotos[currentIndex];
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeViewer(); closeLightbox(); }
    if (e.key === 'ArrowRight') changeImg(1);
    if (e.key === 'ArrowLeft') changeImg(-1);
});

function sanitize(str) {
    return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function submitForm(e) {
    e.preventDefault();
    const name = sanitize(document.getElementById('name').value);
    const phone = sanitize(document.getElementById('phone').value);
    const work = sanitize(document.getElementById('workType').value);
    const message = sanitize(document.getElementById('message').value);
    const text = `Hello Vandana Welding Shop,%0AName: ${name}%0APhone: ${phone}%0AWork: ${work}%0AMessage: ${message}`;
    window.open(`https://wa.me/919873202362?text=${text}`, '_blank', 'noopener,noreferrer');
}
