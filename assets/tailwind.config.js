const colorsPai = {
  'pai-pink-strong': '#ff8097',
  'pai-pink-light': '#FFB7C3',
  'pai-green-strong': '#77dd77',
  'pai-sky-strong': '#84b6f4',
  'pai-sky-medium': '#c3f8ff',
  'pai-sky-bold': '#5086c1',
  'pai-sky-light': '#e4fbfb',
  'pai-brown-light': '#F8EDEB',
  'pai-gray-strong': '#9b9b9b',
};

tailwind.config = {
  theme: {
    extend: {
      colors: {
        'gray-strong': '#222',
        'pai-green': '#C5E0DC',
        'pai-sky': '#A2C8CC',
        'pai-pink-strong': colorsPai['pai-pink-strong'],
        'pai-sky-strong': colorsPai['pai-sky-strong'],
        'pai-sky-bold': colorsPai['pai-sky-bold'],
        'pai-gray-strong': colorsPai['pai-gray-strong'],
        'pai-sky-light': colorsPai['pai-sky-light'],
        'pai-sky-medium': colorsPai['pai-sky-medium'],
      },
      backgroundColor: {
        'card-one': colorsPai['pai-green-strong'],
        'card-two': '#fdfd96',
        'card-three': '#84b6f4',
        'card-four': '#fdcae1',
        'gray-strong': '#222',
        'pai-pink-strong': colorsPai['pai-pink-strong'],
        'pai-brown-light': colorsPai['pai-brown-light'],
        'pai-sky-strong': colorsPai['pai-sky-strong'],
        'pai-sky-bold': colorsPai['pai-sky-bold'],
      },
    },
  },
};
