import { NextPage } from "next";
import Card2 from "../components/card/card-2";
import Container from "../components/container/container";

const Projects: NextPage = () => {
    const data = [
        {
            href: '/projects/1',
            title: 'Fusion Marketplace',
            description: 'Fusion Medical Staffing Job Market application for traveling healthcare',
            imageSrc: '/../public/fusion-marketplace.png',
            imageDescription: 'Fusion Marketplace home page'
        },
        {
            href: '/projects/2',
            title: 'MindTap School',
            description: 'Cengage Learning K-12 education platform, MindTap School',
            imageSrc: '/../public/mts.png',
            imageDescription: 'MindTap Schools content landing page'
        },
        {
            href: '/projects/3',
            title: 'LeanBiologix',
            description: 'Site theme refresh focusing on SEO and performance optimization',
            imageSrc: '/../public/leanbiologix.png',
            imageDescription: 'LeanBiologix langing page'
        },
        {
            href: '/projects/4',
            title: 'React Magma',
            description: 'Cengage Group Open Source Design System',
            imageSrc: '/../public/react-magma.png',
            imageDescription: 'React Magma landing page'
        },
        {
            href: '/projects/5',
            title: `Gal's Best PAl`,
            description: 'New Site design and development',
            imageSrc: '/../public/gals_best_pal.png',
            imageDescription: 'Gals best pal landing page'
        },
        {
            href: '/projects/6',
            title: 'Digital Margketing',
            description: 'National Geographic Learning / Cengage Learning digital learning marketing campaign',
            imageSrc: '/../public/digital-campaign.png',
            imageDescription: 'digital Marketing campaign for National Geographic learning'
        },
        {
            href: '/projects/7',
            title: 'National Geographic k-12 Marketing site',
            description: `Site update for Cengage Learning's National Geographic marketing site.`,
            imageSrc: '/../public/ngl-marketing.png',
            imageDescription: 'Marketing site for National Geographic Learning for Cengage Learning'
        },
        {
            href: '/projects/7',
            title: 'Big Ideas K-12 Mathematics',
            description: 'National Geographic Learning / Cengage Learning K-12 Mathematics campaign',
            imageSrc: '/../public/big-ideas-campaign.png',
            imageDescription: 'Big Ideas K-12 Mathematics Marketing'
        },
        {
            href: '/projects/8',
            title: 'Animation Calculator',
            description: `Services calculator for Cengage Learning's Creative Studio team`,
            imageSrc: '/../public/animation-calculator.png',
            imageDescription: 'Creative Stuido Animation Calculator page'
        },
        {
            href: '/projects/9',
            title: 'Express Animation',
            description: `Creative Studio's Services page creation`,
            imageSrc: '/../public/express-animations.png',
            imageDescription: 'Creative Stuido Animation Calculator page'
        },
        {
            href: '/projects/10',
            title: 'My English Language Teaching',
            description: `national Geographic Learning'x MyELT platform for learning and teaching English as a second language`,
            imageSrc: '/../public/myelt.png',
            imageDescription: 'MyELT landing page'
        },
    ];

    return (
        <>
            <Container>
                <h1 className="font-mono text-center text-6xl m-5">Projects</h1>
            </Container>
            <div className="flex justify-center gap-3 flex-wrap max-w-5xl">
                {data.map((project, i) => {
                    return <Card2 data={project} key={i} />
                })}
            </div>
        </>
    )
}

export default Projects;