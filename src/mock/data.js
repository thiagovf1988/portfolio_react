import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Thiago Fernandes | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello. My name is',
  name: 'Thiago Vieira Fernandes',
  subtitle: 'I am the Developer of this website.',
  cta: 'Get to know my previous work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'sgegerg',
  paragraphTwo: 'sge5ges',
  paragraphThree: 'sge5ges',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'gesrge',
    info: 'geger',
    info2: 'h5hs5',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Below you find my e-mail address and my social media pages',
  btn: 'E-mail',
  email: 'thiagovf.eng@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/ThiagoF42713207',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/thiagovf1988',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thiago-vieira-fernandes-6073b130/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/thiagovf1988',
    },
  ],
};

// // Github start/fork buttons
// export const githubButtons = {
//   isEnabled: true, // set to false to disable the GitHub stars/fork buttons
// };
