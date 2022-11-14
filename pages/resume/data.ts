export type School = {
  name: string;
  time: string;
  degree: string;
};

type Detail = {
  time: string;
  position: string;
  description: string;
};

type WorkExperience = {
  name: string;
  details: Detail[];
};

export const educations: School[] = [
  {
    name: 'The City College of New York, CUNY, New York, NY',
    time: '2016 – 2018',
    degree: 'Bachelor of Arts in Digital Design',
  },
  {
    name: 'Borough of Manhattan Community College, CUNY, New York, NY',
    time: '2014 – 2016',
    degree: 'Associate of Science in Multimedia Programming',
  },
];

export const workExperiences: WorkExperience[] = [
  {
    name: 'ZEALS Co., Ltd., Tokyo, Japan',
    details: [
      {
        time: '10. 2021 – Present',
        position: 'Lead Frontend Engineer',
        description: `One of the leaders of Zeals's Frontend chapter. Lead a team of four. Experienced in both scrum, and kanban workflow. Supporting Project Owners and Scrum Masters regarding project releases and schedules. Managing resources and team-growth`,
      },
      {
        time: '5. 2019 – 10. 2021',
        position: 'Frontend Engineer',
        description: `Frontend web-application development`,
      },
      {
        time: '3. 2019 – 5. 2019',
        position: 'UX Designer',
        description: `UI/UX design by using Adobe Creative Suites. Responsible for researching, evaluating user requirements including advertisement design`,
      },
    ],
  },
  {
    name: 'Hemispheric Institute at NYU',
    details: [
      {
        time: '2. 2017 – 5, 2017',
        position: 'Web Development Intern',
        description: `Web application development (WordPress). User experiences flow design. User guidelines, tooltips.`,
      },
    ],
  },
];
type TechStack = string;

type SkillSet = {
  area: string;
  techStacks: TechStack[];
};

export const skillSet: SkillSet[] = [
  {
    area: 'JS Frameworks / Libraries',
    techStacks: [
      'Javascript',
      'TypeScript',
      'Reactjs',
      'Nextjs',
      'Solidjs',
      'MUI',
      'Micro Frontend',
      'Storybook',
      'Componenet Library',
    ],
  },
  {
    area: 'API',
    techStacks: ['Nodejs', 'Firebase', 'gRPC', 'REST API'],
  },
  {
    area: 'Testing',
    techStacks: ['Jest', 'enzyme', 'React Testing Library'],
  },

  { area: 'CI CD', techStacks: ['Circle CI', 'Git-flow'] },
];

export const languages: string[] = ['English', 'Japanese', 'Korean'];
