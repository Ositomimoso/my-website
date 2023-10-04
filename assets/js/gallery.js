const images = [
  {
    src: '/assets/images/gallery/1.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/2.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/3.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/4.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/5.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/6.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/7.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/8.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/9.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/10.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/11.jpg',
    alt: 'niños',
  },
  {
    src: '/assets/images/gallery/12.jpg',
    alt: 'niños',
  },
];

const templateCardImage = (card, i) => {
  return `<div data-aos="fade-right" data-aos-delay=${
    i * 50
  } class="border grid place-items-center w-[285px] h-[285px] overflow-hidden">
    <img src=${card.src} alt=${card.alt} class="object-cover h-full w-full" />
  </div>`;
};

document.addEventListener('DOMContentLoaded', function () {
  const containerImages = document.querySelector('#container-images-gallery');

  images.forEach((image, i) => {
    containerImages.innerHTML += templateCardImage(image, i);
  });
});
