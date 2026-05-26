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
  loading: {
    loading: string;
    experience: string;
    subtext: string;
    logoAlt: string;
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
  about: {
    eyebrow: string;
    title: string;
    description: string;
    country: string;
    availability: string;
    email: string;
    downloadCv: string;
    profileAlt: string;
    skillsTitle: string;
    skillsSubtitle: string;
    languages: string;
    frameworks: string;
    tools: string;
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
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    locationLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFormLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendMessage: string;
    emailIconAlt: string;
    locationIconAlt: string;
    githubIconAlt: string;
    linkedinIconAlt: string;
  };
  project: {
    backToProjects: string;
    viewPage: string;
    viewCode: string;
    technologies: string;
    information: string;
    type: string;
    releaseDate: string;
    features: string;
    previousImage: string;
    nextImage: string;
    imageCounter: string;
    notFound: string;
  };
  error: {
    eyebrow: string;
    title: string;
    description: string;
    hint: string;
    imageAlt: string;
    homeAction: string;
    projectsAction: string;
    footerPrefix: string;
    footerLink: string;
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
    loading: {
      loading: 'Cargando',
      experience: 'experiencia...',
      subtext: 'Desarrollando ideas, creando soluciones',
      logoAlt: 'Logo de Francisco Panuccio'
    },
    home: {
      greeting: 'Hola, soy',
      title: 'Desarrollador Web Full Stack',
      description: 'Enfocado en crear webs responsive, escalables, optimizadas, visualmente atractivas y centradas en la experiencia del usuario.',
      viewProjects: 'Ver mis proyectos',
      contactMe: 'Contactarme',
      featuredProjects: 'Proyectos Destacados',
      viewProject: 'Ver Proyecto',
      viewAllProjects: '⮕ Ver todos los proyectos ⬅',
      projects: {
        fallutoDescription: 'Juego del impostor, incluye creación de mesas online en forma gratuita y sin publicidad.',
        pokewordleDescription: 'Juego de tipo Wordle con temática Pokémon, incluye modo historia.',
        tastebyteDescription: 'Aplicación móvil para gestión gastronómica con multiplicidad de roles.'
      }
    },
    about: {
      eyebrow: 'Sobre Mí',
      title: 'Desarrollador Full Stack',
      description: 'Desarrollador Full Stack apasionado por crear aplicaciones web modernas, experiencias interactivas y juegos online. Especializado en Angular y TypeScript, me enfoco en combinar rendimiento, diseño y funcionalidad para construir productos digitales atractivos, escalables y orientados al usuario.',
      country: 'Argentina',
      availability: 'Disponible para proyectos',
      email: 'franciscopanuccio@gmail.com',
      downloadCv: 'Descargar CV',
      profileAlt: 'Foto de perfil de Francisco Panuccio',
      skillsTitle: 'Habilidades',
      skillsSubtitle: 'Tecnologías con las que más trabajo:',
      languages: 'Lenguajes',
      frameworks: 'Frameworks, Entornos y Librerías',
      tools: 'Herramientas'
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
      viewGithub: 'Ver todos los proyectos en GitHub ➜',
      githubAlt: 'GitHub'
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      description: '¿Tienes algún proyecto web en mente que te gustaría hacer realidad? Construyámoslo juntos.',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailFormLabel: 'Email',
      emailPlaceholder: 'tunombre@email.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuentame sobre tu proyecto...',
      sendMessage: 'Enviar mensaje',
      emailIconAlt: 'Email',
      locationIconAlt: 'Ubicación',
      githubIconAlt: 'GitHub',
      linkedinIconAlt: 'LinkedIn'
    },
    project: {
      backToProjects: 'Volver a Proyectos',
      viewPage: 'Ver página',
      viewCode: 'Ver código',
      technologies: 'Tecnologías Utilizadas',
      information: 'Información',
      type: 'Tipo',
      releaseDate: 'Fecha',
      features: 'Características',
      previousImage: 'Imagen anterior',
      nextImage: 'Imagen siguiente',
      imageCounter: 'Imagen',
      notFound: 'Proyecto no encontrado'
    },
    error: {
      eyebrow: '¡Ups! Parece que te perdiste',
      title: 'Página no encontrada',
      description: 'La página que buscas no existe o fue movida.',
      hint: 'Vuelve al inicio para explorar algo increíble.',
      imageAlt: 'Error 404',
      homeAction: 'Volver al Inicio',
      projectsAction: 'Ver Mis Proyectos',
      footerPrefix: 'Si crees que esto es un error, puedes',
      footerLink: 'contactarme'
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
    loading: {
      loading: 'Loading',
      experience: 'experience...',
      subtext: 'Developing ideas, creating solutions',
      logoAlt: 'Francisco Panuccio logo'
    },
    home: {
      greeting: 'Hi, I am',
      title: 'Full Stack Web Developer',
      description: 'Focused on building responsive, scalable, optimized, visually appealing websites centered on user experience.',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      featuredProjects: 'Featured Projects',
      viewProject: 'View Project',
      viewAllProjects: '⮕ View all projects ⬅',
      projects: {
        fallutoDescription: 'Impostor game with free online room creation and no ads.',
        pokewordleDescription: 'Wordle-style Pokémon game with story mode.',
        tastebyteDescription: 'Mobile app for restaurant management with multiple user roles.'
      }
    },
    about: {
      eyebrow: 'About Me',
      title: 'Full Stack Developer',
      description: 'Full Stack Developer passionate about creating modern web applications, interactive experiences, and online games. Specialized in Angular and TypeScript, I focus on combining performance, design, and functionality to build attractive, scalable, user-centered digital products.',
      country: 'Argentina',
      availability: 'Open to Projects',
      email: 'franciscopanuccio@gmail.com',
      downloadCv: 'Download CV',
      profileAlt: 'Profile photo of Francisco Panuccio',
      skillsTitle: 'Skills',
      skillsSubtitle: 'The technologies I work with most often:',
      languages: 'Tech Stack',
      frameworks: 'Frameworks, Environments and Libraries',
      tools: 'Tools'
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
      viewGithub: 'View all projects on GitHub ➜',
      githubAlt: 'GitHub'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let\'s Talk',
      description: 'Do you have a web project in mind that you\'d like to bring to life? Let\'s build it together.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailFormLabel: 'Email',
      emailPlaceholder: 'yourname@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendMessage: 'Send message',
      emailIconAlt: 'Email',
      locationIconAlt: 'Location',
      githubIconAlt: 'GitHub',
      linkedinIconAlt: 'LinkedIn'
    },
    project: {
      backToProjects: 'Back to Projects',
      viewPage: 'View page',
      viewCode: 'View code',
      technologies: 'Technologies Used',
      information: 'Information',
      type: 'Type',
      releaseDate: 'Date',
      features: 'Features',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      imageCounter: 'Image',
      notFound: 'Project not found'
    },
    error: {
      eyebrow: 'Oops! Looks like you got lost',
      title: 'Page not found',
      description: 'The page you are looking for does not exist or was moved.',
      hint: 'Go back home and let’s explore something incredible.',
      imageAlt: '404 error',
      homeAction: 'Back to Home',
      projectsAction: 'View My Projects',
      footerPrefix: 'If you think this is an error, you can',
      footerLink: 'contact me'
    }
  }
};
