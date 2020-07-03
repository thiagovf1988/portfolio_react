import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Thiago Fernandes | Portfolio', // e.g: 'Name | Developer';
  lang: 'en', // e.g: en, es, fr, jps
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello. My name is',
  name: 'Thiago',
  subtitle: 'I am the Developer of this website.',
  cta: 'Get to know my previous work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Thiago. I am a Full stack developer with a engineer degree.',
  paragraphTwo:
    'My recent jobs were focused on engineer projects for major companies in the UK. I have worked coding since college with different languages and purposes. Check below some of my recent websites. ',
  paragraphThree: 'Also, feel free to contact me anytime.',
  resume:
    'https://docs.google.com/document/d/1sSNo4wCg6s-oIVs9Z8usCRS8sZodqy3hexVdvi2f1vM/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'rslogo.png',
    title: 'Robot Searcher',
    info: 'A simple searcher of robots.',
    info2:
      'A React app managed through npm and deployed on Github. The code organizes the components, containers and error handling.  It uses JavaScript, HTML5, CSS3, and JSON on its script. The user interaction is achieved through a One-way data flow where the parents components feed their children with the State and get the properties from them. ',
    url: 'https://thiagovf1988.github.io/Robot-Searcher/',
    repo: 'https://github.com/thiagovf1988/Robot-Searcher', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'calogo.png',
    title: 'Algorithms',
    info: 'A website to run algorithms',
    info2:
      'This project is based on the book "Algorithms to live by" and in the website "daily coding". At the moment it just have the "Current Average" which allows the user to see the evolution of the average number of its list as he adds new numbers. The "Secretary problem", "Monte Carlo Simulation", "A/B tests", and "Bucket sort" are in prospect to be implemented as well.',
    url: 'https://thiagovf1988.github.io/algorithms/',
    repo: 'https://github.com/thiagovf1988/algorithms', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'cailogo.png',
    title: 'Chess AI',
    info: 'Software to face opponents in chess matches',
    info2:
      'I am still working on this project as it demands a considerable time. At the moment the page below shows the current stage of the software (makes basic moves and can see the moves from the adversary). Neural network and convolutional Q-learning are being implemented',
    url: 'https://thiagovf1988.github.io/chessai/',
    repo: 'https://github.com/thiagovf1988/chessai', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Below you will find my e-mail address and my social media pages',
  btn: 'E-mail',
  email: 'thiagovf.eng@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/ThiagoVieiraFe3',
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
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
