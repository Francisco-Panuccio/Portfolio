export type Language = 'es' | 'en';

export interface Messages {
  header: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    lightModeAlt: string;
    languageAlt: string;
  };
  home: {
    greeting: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    featuredProjects: string;
    viewProject: string;
    viewAllProjects: string;
    projects: {
      fallutoDescription: string;
      pokewordleDescription: string;
      tastebyteDescription: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      game: string;
      application: string;
    };
    viewProject: string;
    viewGithub: string;
    githubAlt: string;
  };
}

export const MESSAGES: Record<Language, Messages> = {
  es: {
    header: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre Mí',
      contact: 'Contacto',
      lightModeAlt: 'Modo Claro',
      languageAlt: 'Idioma'
    },
    home: {
      greeting: 'Hola, soy',
      title: 'Desarrollador Web Full Stack',
      description: 'Enfocado en crear webs responsive, escalables, optimizadas, visualmente atractivas y centradas en la experiencia del usuario.',
      viewProjects: 'Ver mis proyectos',
      contactMe: 'Contactarme',
      featuredProjects: 'Proyectos Destacados',
      viewProject: 'Ver Proyecto',
      viewAllProjects: '— Ver todos los proyectos —',
      projects: {
        fallutoDescription: 'Juego del impostor, incluye creación de mesas online en forma gratuita y sin publicidad.',
        pokewordleDescription: 'Juego de tipo Wordle con temática Pokémon, incluye modo historia.',
        tastebyteDescription: 'Aplicación móvil para gestión gastronómica con multiplicidad de roles.'
      }
    },
    projects: {
      title: 'Todos Mis Proyectos',
      subtitle: 'Una colección de proyectos personales donde combino diseño, código y creatividad.',
      filters: {
        all: 'Todos',
        game: 'Juegos',
        application: 'Aplicaciones'
      },
      viewProject: 'Ver Proyecto',
      viewGithub: 'Ver todos los proyectos en GitHub',
      githubAlt: 'GitHub'
    }
  },
  en: {
    header: {
      home: 'Home',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Contact',
      lightModeAlt: 'Light Mode',
      languageAlt: 'Language'
    },
    home: {
      greeting: 'Hi, I am',
      title: 'Full Stack Web Developer',
      description: 'Focused on building responsive, scalable, optimized, visually appealing websites centered on user experience.',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      featuredProjects: 'Featured Projects',
      viewProject: 'View Project',
      viewAllProjects: '— View all projects —',
      projects: {
        fallutoDescription: 'Impostor game with free online room creation and no ads.',
        pokewordleDescription: 'Wordle-style Pokémon game with story mode.',
        tastebyteDescription: 'Mobile app for restaurant management with multiple user roles.'
      }
    },
    projects: {
      title: 'All My Projects',
      subtitle: 'A collection of personal projects where I combine design, code, and creativity.',
      filters: {
        all: 'All',
        game: 'Games',
        application: 'Applications'
      },
      viewProject: 'View Project',
      viewGithub: 'View all projects on GitHub',
      githubAlt: 'GitHub'
    }
  }
};
