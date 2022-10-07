import { images } from '../Skills/mock';

export const portFolio = [
  {
    id: 1,
    title: 'My Portfolio 1.0',
    url: 'o 1.0',
    techs: [
      {
        name: 'html',
        url: images[0].url,
        alt: images[0].alt,
      },
      {
        name: 'css',
        url: images[1].url,
        alt: images[1].alt,
      },
      {
        name: 'js',
        url: images[2].url,
        alt: images[2].alt,
      },
      {
        name: 'react',
        url: images[4].url,
        alt: images[4].alt,
      },
    ],
  },
  {
    id: 2,
    title: 'Calculator',
    url: 'o 1.0',
    techs: [
      {
        name: 'html',
        url: images[0].url,
        alt: images[0].alt,
      },
      {
        name: 'css',
        url: images[1].url,
        alt: images[1].alt,
      },
      {
        name: 'js',
        url: images[2].url,
        alt: images[2].alt,
      },
    ],
  },
];