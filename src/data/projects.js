// /data/projects.js
import omdbImg from '../assets/omdb.png';
import portfolioImg from '../assets/portfolio.png';
import tattooImg from '../assets/tattoo.png';
import easysImg from '../assets/easys.png';

export const projects = [
  {
    id: 'omdb',
    title: 'OMDB Movie Search',
    demo: 'https://ohlssondevomdb.netlify.app/',
    repo: 'https://github.com/markusohlsson/omdb',
    tech: ['Vue','Tailwind', 'Node.js', 'Express'],
    image: omdbImg,
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
    image: portfolioImg,
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
    image: tattooImg,
    description: 'The Tattoo Portfolio Website is a responsive web application built with Vue 3 and Vite. It showcases a tattoo artist’s work, including tattoos, sketches, arts & crafts, and design projects. The site also features sections for artist experience, events, and exhibitions. Smooth scroll animations powered by AOS enhance the user experience, while GitHub Pages provides fast and reliable hosting.',
    fullTech: ['Vue 3','Vue Router','Vite','AOS','Lucide Icons','ESLint','Stylelint','GH-Pages']
  },
  {
    id: 'easys',
    title: 'Easys Redovisning',
    demo: 'https://markusohlsson.github.io/easys/#/',
    repo: 'https://github.com/markusohlsson/easys',
    tech: ['Vue','Vite','leaflet','ESLint'],
    image: easysImg,
    description: 'Easys Redovisning Website is a modern single-page application built with Vue 3 and Vue Router for a small accounting firm. It features a clean, responsive design with interactive maps powered by Leaflet, making it easy for clients to find office locations and services. Deployed on GitHub Pages, the site is lightweight, fast, and accessible, providing a professional online presence without requiring a backend.',
    fullTech: ['Vue 3','Vue Router','Vue Leaflet','Leaflet','Vite','Lucide Icons','ESLint','Stylelint','GH-Pages']
  }
];
