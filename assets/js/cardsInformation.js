window.onload = function () {
  const cards = [
    {
      title: 'Gabinete Psicopedagógico',
      description:
        'Nuestra Escuela infantil cuenta con un espacio de seguimiento Psicopedagógico para acompañar a todos los niños/as en su etapa del desarrollo, con entrevistas de orientación  y asesoramiento a las familias.',
      image: '/assets/images/about-us/g-psicop.jpg',
      id: generateID(),
      color: 'bg-card-one',
    },
    {
      title: 'Actividades especiales',
      description:
        'Yoga, música y expresión corporal, fomentan el desarrollo motor, concentración, gestión emocional, comunicación, creatividad, trabajo en equipo y confianza. Benefician el crecimiento físico, emocional y social.',
      image: '/assets/images/about-us/aprendemos-jugando.jpg',
      id: generateID(),
      color: 'bg-card-two',
    },
    {
      title: 'Espacio Multisensorial',
      description:
        'Contamos con un espacio único para que nuestros alumnos y alumnas disfruten de diferentes experiencias sensoriales a través de la luz, sonidos, formas y colores.',
      image: '/assets/images/about-us/multisensorial.jpg',
      id: generateID(),
      color: 'bg-card-three',
    },
    {
      title: 'Aprendemos Jugando',
      description:
        'Junto a nuestro equipo docente especializado Exploramos nuevos conocimientos, desarrollamos habilidades y fortalecemos lazos de amistad. ¡Bienvenidos a un emocionante viaje de aprendizaje y diversión!',
      image: '/assets/images/about-us/aprendemos-jugando.jpg',
      id: generateID(),
      color: 'bg-card-four',
    },
  ];

  const templateCard = (card, i) => {
    return `
          <article data-aos="fade-right" data-aos-delay=${i}  class="min-h-[400px] w-[350px] ${card.color} rounded-xl p-4 text-center hover:scale-105 transition-all duration-600">
              <header
                  class="h-[200px]
                  w-[200px]
                  mx-auto
                  my-8
                  rounded-full
                  p-2
                  flex
                  justify-center
                  items-center
                  relative
                  after:content-['']
                  after:border
                  after:border-dashed
                  after:border-2
                  after:h-full
                  after:w-full
                  after:absolute
                  after:rounded-full
                  after:hover:animate-spin
                  after:duration-600"
              >
                  <img
                  src=${card.image}
                  alt="Imagen niño"
                  class="h-[180px] w-[180px] mx-auto rounded-full object-cover"
                  />
              </header>
                  <h3 class="text-[24px] font-bold">${card.title}</h3>
                  <p class="text-[15px]">${card.description}</p>
          </article>
      `;
  };

  const cardContainer = document.querySelector('#card');

  cards.forEach((card, i) => {
    cardContainer.innerHTML += templateCard(card, i * 50);
  });
};
