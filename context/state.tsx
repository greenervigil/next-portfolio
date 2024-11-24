import React, { ReactNode } from 'react';

import { UserType } from '../types/user-type';

interface AppWrapperProps {
  children: ReactNode;
}

let sharedState = {
  name: 'Daniel Greener-Vigil',
  title: `Software Engineer | Tech Lead | Mentor`,
  aboutText: `<p>With over ${new Date().getFullYear() - 2014} years of experience as a Software Engineer, I am driven by a deep passion for learning and a commitment to continuous improvement. This passion fuels everything I do—whether it's tackling new technologies, leading teams through complex challenges, or mentoring the next generation of developers. I thrive in environments where innovation meets collaboration, and I am always eager to take on new challenges that push both my skills and my team’s abilities to new heights.</p>
  <p>Throughout my career, I've had the opportunity to work on a broad range of projects, leveraging a diverse set of technologies, including:</p></br>
  <ul class="about-list">
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React React Native, Next.JS, Svelte, SolidJS, Tailwind, Bootstrap, Material UI, NPM, Yarn, PNPM, Turborepo, Storybook.</li>
    <li><strong>Backend:</strong> Node.js, Express, Java, Spring Boot, GraphQL, RESTful APIs, Prisma, PostgreSQL, MySQL, Redux.</li>
    <li><strong>Testing:</strong> Jest, React Testing Library, Enzyme, JUnit, Mockito.</li>
    <li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins, GitHub Actions, AWS, Azure, Google Cloud Platform, Netlify, Vercel.</li>
    </ul></br>
    <p>As a Tech Lead, I take pride in not only solving complex technical problems but also in building high-performing, cohesive teams. I believe in creating environments where people feel empowered to share ideas, learn from each other, and push the boundaries of what's possible. My approach is hands-on and collaborative, ensuring that both the code and the people behind it are always moving forward.</p>`,
  greenfield: '<p>In addition to my engineering work, I lead GreenField Development, a freelance partnership I founded to help self-taught developers accelerate their careers. Through this mentorship program, I focus on developing practical, project-based skills with a strong emphasis on Agile methodologies, version control practices, and project management. It’s incredibly rewarding to guide developers through their journeys and watch them grow into confident, capable contributors.</p>',
  projects: [
    {
      id: 15,
      href: '/projects/15',
      link: 'https://app.learningportrait.com',
      title: 'Learning Portrait',
      description: 'Learning Portrait is a platform for teachers and students to track their learning progress and achievements.',
      imageSrc: '/learning_portrait.png',
      imageDescription: 'Learning Portrait teacher dashboard',
      tech: ['React', 'NextJS', 'MUI', 'JavaScript','TypeScript', 'Jest', 'React Testing Library', 'monorepo', 'Prisma ORM', 'GraphQL', 'Apollo Client', 'PostgreSQL', 'Vercel']
    },
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
