import { images } from '../Skills/mock';

export const portFolio = [
  {
    id: 1,
    title: 'My Portfolio 1.0',
    urlBack: 'https://res.cloudinary.com/dhz1saoac/image/upload/v1666959073/my-portfolio_ku5ds9.png',
    desc: 'Its my first version of my professional portfolio and it was made to post my projects and to you follow my jorney as developer. Basecaly, It was made with React.',
    urlGit: 'https://github.com/EoBryanDev/my-portfolio',
    urlSite: 'unvailable',
    gridType: 'ultraWide',
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
        url: images[3].url,
        alt: images[3].alt,
      },
    ],
  },
  {
    id: 2,
    title: 'Report Automator',
    urlBack: 'https://res.cloudinary.com/dhz1saoac/image/upload/v1666904594/ReportAutomator_u73fil.png',
    desc: 'App which valid the user and based on the fifth day from the current month, the app send a PDF to registered email with the sales summary from the last month.',
    urlGit: 'https://github.com/EoBryanDev/ReportAutomator',
    urlSite: 'unvailable',
    gridType: 'wide',
    techs: [
      {
        name: 'c#',
        url: images[7].url,
        alt: images[7].alt,
      },
      {
        name: 'mysql',
        url: images[6].url,
        alt: images[6].alt,
      },
    ],
  },
  {
    id: 3,
    title: 'Finans - Personal Finances',
    urlBack: 'https://res.cloudinary.com/dhz1saoac/image/upload/v1666872529/Finans_-_Personal_Finances_vzm2gj.png',
    desc: 'Sign up and sign in screen with PHP, expenses and earning CRUD with PHP and MySQL, timeline with chats from Google Charts with JS and Personal Finance balance.',
    urlGit: 'https://github.com/EoBryanDev/PersonalFinancesRefactoring',
    urlSite: 'https://finans-personalfinances.000webhostapp.com/',
    gridType: 'wide',
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
        name: 'php',
        url: images[5].url,
        alt: images[5].alt,
      },
      {
        name: 'mysql',
        url: images[6].url,
        alt: images[6].alt,
      },
    ],
  },
  {
    id: 4,
    title: 'First Steps with React',
    urlBack: 'https://res.cloudinary.com/dhz1saoac/image/upload/v1666872988/First_Steps_w_React_dgwk2c.png',
    desc: "It's an app which consume an api from json place holder, receiving a photo array and a post array. The app also allow you filter posts throgh a search box.",
    urlGit: 'https://github.com/EoBryanDev/first-steps-w-react',
    urlSite: 'https://firsts-steps-w-react-app.netlify.app',
    gridType: 'wide',
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
        url: images[3].url,
        alt: images[3].alt,
      },
    ],
  },
  {
    id: 5,
    title: 'Burguer Shop App',
    urlBack: 'https://res.cloudinary.com/dhz1saoac/image/upload/v1666903602/Make_your_Burguer_epc9vh.png',
    desc: 'App made to clients make their personalised hamburguer order. Data is consumed through a fake API published by me. In another words, CRUD is available.',
    urlGit: 'https://github.com/EoBryanDev/burguer-shop',
    urlSite: 'https://burguer-shop-project.netlify.app/',
    gridType: 'tall',
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
        name: 'vue',
        url: images[10].url,
        alt: images[10].alt,
      },
    ],
  },
  {
    id: 6,
    title: 'Fake API - Burguer Shop',
    urlBack: 'https://res.cloudinary.com/dhz1saoac/image/upload/v1666926386/Fake-API_bubykw.png',
    desc: 'Really basic App which brings data from a fake api --JSON-SERVER-- to fill the Burguer Shop App and allowing CRUD operations.',
    urlGit: 'https://github.com/EoBryanDev/fake-api-burguer-shop',
    urlSite: 'https://fake-api-burguer-shop.herokuapp.com/',
    gridType: 'tall',
    techs: [
      {
        name: 'js',
        url: images[2].url,
        alt: images[2].alt,
      },
      {
        name: 'node',
        url: images[4].url,
        alt: images[4].alt,
      },
    ],
  },
  {
    id: 7,
    title: 'To do List',
    urlBack: 'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-manutencao_114360-391.jpg?w=2000',
    desc: 'Brief description about the project made',
    urlGit: 'unvailable',
    urlSite: 'unvailable',
    gridType: 'wide',
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
        name: 'node',
        url: images[4].url,
        alt: images[4].alt,
      },
      {
        name: 'mongo',
        url: images[8].url,
        alt: images[8].alt,
      },
    ],
  },
];
