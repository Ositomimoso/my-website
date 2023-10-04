document.addEventListener('DOMContentLoaded', function () {
  const bee = document.querySelector('#bee');

  const tl = gsap.timeline();

  tl.to(bee, {
    // x: -1900,
    transform: 'rotateY(0deg)',
    left: '-100%',
    duration: 10,
    // repeat: -1,
    yoyo: true,
  })
    .to(bee, {
      transform: 'rotateY(180deg)',
      right: '13%',
      left: '-14%',
      duration: 1,
      yoyo: true,
    })
    .to(bee, {
      y: 20,
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
  // .to(bee, {
  //   transform: 'rotateY(180deg)',
  //   right: '-10%',
  //   y: 20,

  //   duration: 10,
  // });
});
