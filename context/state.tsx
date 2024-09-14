import React, { ReactNode } from 'react';

import { UserType } from '../types/user-type';

interface AppWrapperProps {
  children: ReactNode;
}

let sharedState = {
  name: 'Daniel Greener-Vigil',
  title: `Software Engineer / Web Developer <br/>Mentor`,
  aboutText: `I have been a Software Engineer for 9 years.  I have a passion for learning and bring this passion to each project I work on.  I am always open and willing to learn something new.  I always welcome new challenges and help cultivate those abilities in others. 
  I have worked on multiple projects with a range of technologies.  I have experience with HTML, CSS, JavaScript, TypeScript, React, React Native, Android(Java), Storybook, NextJs, Svelte, SolidJS, Bootstrap, React Bootstrap, Tailwind, Jest, React Testing Library, Redux, MUI, and even Wordpress. `,
  greenfield: 'I additionally run a freelance partnership called GreenField Development.  I have spent the last few years developing this as a mentorship program to assist self taught developers.  I sought to provide the additional skills developers need through a project based mentorship designed specifically for each developer with the Agile Methodology, version control practices and standard project management built into the process.',
  projects: [
    {
      id: 14,
      href: '/projects/14',
      link: 'https://prod-v2.fusionmedstaff.com',
      title: 'Fusion Medical Staffing V2',
      description: 'Fusion Medical Staffing Job Market application for traveling healthcare Technology update',
      imageSrc: '/fusionmedstaff-v2.png',
      imageDescription: 'Fusion Medical Staffing V2 home page',
      tech: ['React', 'NextJS', 'Tailwind CSS', 'JavaScript','TypeScript', 'Jest', 'React Testing Library', 'Storybook', 'Builder.io', 'Algolia', 'Headless Wordpress', 'Shadcn/ui', 'turborepo']
    },
    { 
      id: 13,
      href: '/projects/13',
      link: 'https://cmmechanicalhvac.com',
      title: 'C&M Mechanical HVAC Services Site',
      description: 'Company site for C&M Mechanical',
      imageSrc: '/cmmechanical.png',
      imageDescription: 'C&M Mechanical home page',
      tech: ['React', 'NextJS', 'Tailwind CSS', 'TypeScript', 'Jest', 'React Testing Library', 'Storybook']
    },
    { 
      id: 1,
      href: '/projects/1',
      link: 'https://fusionmedstaff.com',
      title: 'Rebrand Fusion Medical Staffing',
      description: 'Fusion Medical Staffing Job Market application for traveling healthcare',
      imageSrc: '/fusionmedstaff.png',
      imageDescription: 'Fusion Medical Staffing home page',
      tech: ['React', 'NextJS', 'CSS', 'TypeScript', 'Jest', 'React Testing Library', 'MUI', 'Storybook', 'Headless Wordpress', 'NextSEO']
    },
    { 
      id: 2,
      href: '/projects/2',
      link: 'https://fusionmarketplace.com',
      title: 'Rebrand Fusion Marketplace',
      description: 'Fusion Medical Staffing Job Market application for traveling healthcare',
      imageSrc: '/fmp.png',
      imageDescription: 'Fusion Marketplace home page',
      tech: ['React', 'NextJS', 'CSS', 'TypeScript', 'Jest', 'React Testing Library', 'MUI', 'Storybook', 'Storyblok', 'NextSEO', 'turborepo']
    },
    {
      id: 3,
      href: '/projects/3',
      link: 'https://nglsync.cengage.com',
      title: 'NGL MindTap School',
      description: 'Cengage Group K-12 education platform, MindTap School through National Geographic Sync',
      imageSrc: '/mts.png',
      imageDescription: 'MindTap Schools content landing page',
      tech: ['React', 'TypeScript', 'Storybook', 'React Magma', 'CSS', 'CSS Modules', 'Styled Components', 'Jest', 'React Testing Library', 'Enzyme']
    },
    {
      id: 4,
        href: '/projects/4',
        title: 'LeanBiologix Site Update',
        link: 'https://leanbiologix.com',
        description: 'Site theme refresh focusing on SEO and performance optimization',
        imageSrc: '/leanbiologix.png',
        imageDescription: 'LeanBiologix langing page',
        tech: ['Wordpress', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 5,
      href: '/projects/5',
      title: 'React Magma Component Library',
      link: 'https://react-magma.cengage.com',
      description: 'Cengage Group Open Source Design System',
      imageSrc: '/react-magma.png',
      imageDescription: 'React Magma landing page',
      tech: ['React', 'React Magma', 'Jest', 'React Testing Library', 'Lerna', 'Gatsby', 'Netlify']
    },
    {
      id: 6,
      href: '/projects/6',
      link: 'https://galsbestpal.com',
      title: `Gal's Best Pal Site`,
      description: 'New Site design and development',
      imageSrc: '/gals_best_pal.png',
      imageDescription: 'Gals best pal landing page',
      tech: ['Wordpress', 'HTML', 'Bootstrap', 'CSS', 'SCSS', 'JavaScript', 'PHP']
    },
    {
      id: 7,
      href: '/projects/7',
      link: 'https://ngl.cengage.com',
      title: 'NGL Digital Marketing Campaign',
      description: 'National Geographic Learning / Cengage Group digital learning marketing campaign',
      imageSrc: '/digital-campaign.png',
      imageDescription: 'digital Marketing campaign for National Geographic learning',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    },
    {
      id: 8,
      href: '/projects/8',
      link: 'https://ngl.cengage.com/assets/html/digitalAccess/index.html',
      title: 'National Geographic k-12 Marketing site',
      description: `Site update for Cengage Group's National Geographic marketing site.`,
      imageSrc: '/ngl-marketing.png',
      imageDescription: 'Marketing site for National Geographic Learning for Cengage Group',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    },
    {
      id: 9,
      href: '/projects/9',
      link: 'https://ngl.cengage.com/assets/html/bigIdeas/index.html',
      title: 'Big Ideas K-12 Mathematics MArketing Campaign',
      description: 'National Geographic Learning / Cengage Group K-12 Mathematics campaign',
      imageSrc: '/big-ideas-campaign.png',
      imageDescription: 'Big Ideas K-12 Mathematics Marketing',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
    },
    {
      id: 10,
      href: '/projects/10',
      link: 'https://cs.cengage.com/animation-calculator/',
      title: 'Animation Calculator',
      description: `Services calculator for Cengage Groups's Creative Studio team`,
      imageSrc: '/animation-calculator.png',
      imageDescription: 'Creative Studio Animation Calculator page',
      tech: ['Wordpress', 'CSS', 'JavaScript', 'PHP']
    },
    {
      id: 11,
      href: '/projects/11',
      link: 'https://cs.cengage.com/capabilities/media-design/animation/express-animations/',
      title: 'Express Animation',
      description: `Cengage Group Creative Studio's Services page creation`,
      imageSrc: '/express-animations.png',
      imageDescription: 'Creative Stuido Animation Calculator page',
      tech: ['Wordpress', 'CSS', 'JavaScript', 'PHP']
    },
    {
      id: 12,
        href: '/projects/12',
        title: 'MyEnglish Language Teaching',
        link: 'https://myelt.heinle.com/ilrn/authentication/signIn.do?inst=MYELT',
        description: `National Geographic Learning's MyELT platform for learning and teaching English as a second language`,
        imageSrc: '/myelt.png',
        imageDescription: 'MyELT landing page',
        tech: ['Java', 'Angular', 'React', 'Struts', 'CSS', 'JavaScript', 'Styled Components']
    }
  ]
};

const AppContext = React.createContext<UserType>(sharedState);

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return React.useContext(AppContext);
}