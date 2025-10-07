// /data/projects.js
import omdb_xs from '../assets/projects/omdb/omdb_xs.png';
import omdb_s from '../assets/projects/omdb/omdb_s.png';
import omdb_m from '../assets/projects/omdb/omdb_m.png';
import omdb_l from '../assets/projects/omdb/omdb_l.png';

import portfolio_xs from '../assets/projects/portfolio/portfolio_xs.png';
import portfolio_s from '../assets/projects/portfolio/portfolio_s.png';
import portfolio_m from '../assets/projects/portfolio/portfolio_m.png';
import portfolio_l from '../assets/projects/portfolio/portfolio_l.png';

import tattoo_xs from '../assets/projects/tattoo/tattoo_xs.png';
import tattoo_s from '../assets/projects/tattoo/tattoo_s.png';
import tattoo_m from '../assets/projects/tattoo/tattoo_m.png';
import tattoo_l from '../assets/projects/tattoo/tattoo_l.png';

import easys_xs from '../assets/projects/easys/easys_xs.png';
import easys_s from '../assets/projects/easys/easys_s.png';
import easys_m from '../assets/projects/easys/easys_m.png';
import easys_l from '../assets/projects/easys/easys_l.png';

export const projects = [
  {
    id: 'omdb',
    title: 'OMDB Movie Search',
    demo: 'https://ohlssondevomdb.netlify.app/',
    repo: 'https://github.com/markusohlsson/omdb',
    tech: ['Vue','Tailwind', 'Node.js', 'Express'],
    images: { xs: omdb_xs, s: omdb_s, m: omdb_m, l: omdb_l },
    description: 'The OMDB Movie Search App is a full-stack web application that allows users to search for movies and access detailed information from the OMDB API. It features a clean separation between frontend and backend, with a modern, responsive UI built using Vue 3, Tailwind CSS, and Pinia for state management. The backend, powered by Node.js and Express 5, efficiently handles API requests with caching, rate-limiting, and secure environment variable management. Users can enjoy fast, paginated search results and structured movie details. Please note that, due to the free hosting used for the backend demo, the initial request may take up to 30 seconds.',
    fullTech: [
      'Vue 3','Vue Router','Pinia','Vite','Tailwind CSS','Axios','Express',
      'CORS','Dotenv','Express Rate Limit','Node Cache','Lucide Icons','Nodemon'
    ]
  },
  {
    id: 'portfoliov2',
    title: 'Portfolio V2',
    demo: 'https://www.ohlsson.dev',
    repo: 'https://github.com/markusohlsson/portfoliov2',
    tech: ['Vue','Vite','Pinia'],
    images: { xs: portfolio_xs, s: portfolio_s, m: portfolio_m, l: portfolio_l },
    description: 'This portfolio website is a full-featured, responsive web application built with Vue 3 and Vite, designed to highlight my skills and projects as a Full Stack Developer. It features smooth scroll animations with AOS, dynamic typing effects with Typed.js, and a clean, modular component structure using the Composition API. The project emphasizes performance, maintainability, and a modern user experience, with client-side routing powered by Vue Router and a lightweight, fast development setup. Additional tooling includes ESLint and Stylelint for code quality, ensuring a professional and polished codebase.',
    fullTech: [
      'Vue 3','Vue Router','Pinia','Pinia Persisted State','Vite','Typed.js',
      'AOS','Lucide Icons','ESLint','Stylelint'
    ]
  },
  {
    id: 'tattoo',
    title: 'Ohlsson Tattoo',
    demo: 'https://markusohlsson.github.io/tattoo',
    repo: 'https://github.com/markusohlsson/tattoo',
    tech: ['Vue','Vite','ESLint'],
    images: { xs: tattoo_xs, s: tattoo_s, m: tattoo_m, l: tattoo_l },
    description: 'The Tattoo Portfolio Website is a responsive web application built with Vue 3 and Vite. It showcases a tattoo artist’s work, including tattoos, sketches, arts & crafts, and design projects. The site also features sections for artist experience, events, and exhibitions. Smooth scroll animations powered by AOS enhance the user experience, while GitHub Pages provides fast and reliable hosting.',
    fullTech: ['Vue 3','Vue Router','Vite','AOS','Lucide Icons','ESLint','Stylelint','GH-Pages']
  },
  {
    id: 'easys',
    title: 'Easys Redovisning',
    demo: 'https://markusohlsson.github.io/easys/#/',
    repo: 'https://github.com/markusohlsson/easys',
    tech: ['Vue','Vite','leaflet','ESLint'],
    images: { xs: easys_xs, s: easys_s, m: easys_m, l: easys_l },
    description: 'Easys Redovisning Website is a modern single-page application built with Vue 3 and Vue Router for a small accounting firm. It features a clean, responsive design with interactive maps powered by Leaflet, making it easy for clients to find office locations and services. Deployed on GitHub Pages, the site is lightweight, fast, and accessible, providing a professional online presence without requiring a backend.',
    fullTech: ['Vue 3','Vue Router','Vue Leaflet','Leaflet','Vite','Lucide Icons','ESLint','Stylelint','GH-Pages']
  }
];
