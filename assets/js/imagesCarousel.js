const sliderCarouselBottom = [
  {
    img: '/assets/images/gallery/11.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/12.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/13.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/14.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/15.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/16.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/17.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/18.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/19.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/20.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/1.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/2.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/3.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/4.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/5.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/6.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/7.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
  {
    img: '/assets/images/gallery/8.jpg',
    alt: 'Imagen 1',
    id: 'container-carousel-gallery',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const containerSlider = document.querySelector('.slide-track');

  sliderCarouselBottom.forEach((item) => {
    containerSlider.innerHTML += `
      <div class="border grid place-items-center h-[250px] slide w-[90%] bg-black ">
        <img src=${item.img} alt="" class=" h-full w-full object-cover">
      </div>
    `;
  });
});
