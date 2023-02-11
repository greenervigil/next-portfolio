import React, { ReactNode } from "react";
import { UserType } from "../types/user-type";

interface AppWrapperProps {
  children: ReactNode;
}

let sharedState = {
  name: 'Daniel Greener-Vigil',
  title: `Software Engineer / Web Developer <br/>Mentor`,
  aboutText: 'I have a passion for learning and bring that passion to software.  I have been a Software Engineer for 6 years and bring my passion to learn to each project.  I am always willing to learn something new and never shy away from the unknown.  I welcome new challenges and help cultivate those abilities in others.',
  greenfield: 'I have spent the last few years developing a mentorship program to assist self taught developers through projects designed for the developer with the Agile Methodology, version control practices and standard project management.',
  projects: [
    {
        href: '/projects/1',
        title: 'Fusion Marketplace',
        description: 'Fusion Medical Staffing Job Market application for traveling healthcare',
        imageSrc: '/../public/fusion-marketplace.png',
        imageDescription: 'Fusion Marketplace home page',
        tech: ["React", "NextJS"]
    },
    {
        href: '/projects/2',
        title: 'MindTap School',
        description: 'Cengage Learning K-12 education platform, MindTap School',
        imageSrc: '/../public/mts.png',
        imageDescription: 'MindTap Schools content landing page',
        tech: ["React"]
    },
    {
        href: '/projects/3',
        title: 'LeanBiologix',
        description: 'Site theme refresh focusing on SEO and performance optimization',
        imageSrc: '/../public/leanbiologix.png',
        imageDescription: 'LeanBiologix langing page',
        tech: ["wordpress", "HTML", "CSS"]
    },
    {
        href: '/projects/4',
        title: 'React Magma',
        description: 'Cengage Group Open Source Design System',
        imageSrc: '/../public/react-magma.png',
        imageDescription: 'React Magma landing page',
        tech: ["React"]
    },
    {
        href: '/projects/5',
        title: `Gal's Best PAl`,
        description: 'New Site design and development',
        imageSrc: '/../public/gals_best_pal.png',
        imageDescription: 'Gals best pal landing page',
        tech: ["wordpress", "HTML", "CSS", "SCSS", "JS", "PHP"]
    },
    {
        href: '/projects/6',
        title: 'Digital Margketing',
        description: 'National Geographic Learning / Cengage Learning digital learning marketing campaign',
        imageSrc: '/../public/digital-campaign.png',
        imageDescription: 'digital Marketing campaign for National Geographic learning',
        tech: ["HTML", "CSS", "Bootstrap5", "JS"]
    },
    {
        href: '/projects/7',
        title: 'National Geographic k-12 Marketing site',
        description: `Site update for Cengage Learning's National Geographic marketing site.`,
        imageSrc: '/../public/ngl-marketing.png',
        imageDescription: 'Marketing site for National Geographic Learning for Cengage Learning',
        tech: ["HTML", "CSS", "Bootstrap5", "JS"]
    },
    {
        href: '/projects/7',
        title: 'Big Ideas K-12 Mathematics',
        description: 'National Geographic Learning / Cengage Learning K-12 Mathematics campaign',
        imageSrc: '/../public/big-ideas-campaign.png',
        imageDescription: 'Big Ideas K-12 Mathematics Marketing',
        tech: ["HTML", "CSS", "Bootstrap5", "JS"]
    },
    {
        href: '/projects/8',
        title: 'Animation Calculator',
        description: `Services calculator for Cengage Learning's Creative Studio team`,
        imageSrc: '/../public/animation-calculator.png',
        imageDescription: 'Creative Stuido Animation Calculator page',
        tech: ["wordpress", "CSS", "JS", "PHP"]
    },
    {
        href: '/projects/9',
        title: 'Express Animation',
        description: `Creative Studio's Services page creation`,
        imageSrc: '/../public/express-animations.png',
        imageDescription: 'Creative Stuido Animation Calculator page',
        tech: ["wordpress", "CSS", "JS", "PHP"]
    },
    {
        href: '/projects/10',
        title: 'My English Language Teaching',
        description: `national Geographic Learning'x MyELT platform for learning and teaching English as a second language`,
        imageSrc: '/../public/myelt.png',
        imageDescription: 'MyELT landing page',
        tech: ["Java", "Angular", "React", "CSS", "JS"]
    },
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