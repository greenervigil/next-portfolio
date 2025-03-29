const testimonials = [
  {
    name: 'Alyx Smeal',
    designation: 'Business Analyst',
    company: 'Fusion Medical Staffing',
    src: 'data:image/jpeg;base64,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',
    quote: `Dan's ability to explain technical concepts to non-technical stakeholders with patience and clarity is unmatched, fostering collaboration and understanding without a hint of superiority. Recently, Dan identified a new CMS for our Tech stack. It will revolutionize our content management, making it more user-friendly and cost-effective. Dan's diligence in researching, involving stakeholders, and demonstrating the product reflects his commitment to finding the best solutions for our team. As a Tech Lead, Dan is a mentor and encourages team members to explore and learn independently, nurturing a culture of growth and empowerment. Above all, Dan's hard work, caring nature, and dedication made him an invaluable member of our team. I don’t know what we would do without Dan here at Fusion.`
  },
  {
    name: 'Emily Slattery',
    designation: 'Product Designer',
    company: 'Fusion Medical Staffing',
    src: 'https://media.licdn.com/dms/image/v2/D5603AQH2vkgzHX7Gzw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661356870268?e=2147483647&v=beta&t=U6_311eUAEvyTKqzeLQTSCT3GqD8ycCqBqlcSk0E7Zc',
    quote: `Dan Vigil is a rockstar! Honestly, I don't know what our team would do without his immense skill, vast knowledge, and go-getter spirit. He's willing to dig into the research, take charge, and put in the extra hours when necessary. He did just that when he found a more cost-effective and user-friendly solution to our website content management system (CMS) for Fusion Medical Staffing. He pushes himself and his team members to do their best and to always grow and improve. He is a kind mentor and a friendly sounding board. I'm extremely grateful to have him as a coworker and I look forward to continuing to learn from him.`
  },
  {
    name: 'Laura Campos',
    designation: 'Backend Tech Lead',
    company: 'Fusion Medical Staffing',
    src: 'https://media.licdn.com/dms/image/C4D03AQFaqFWobLjINA/profile-displayphoto-shrink_200_200/0/1613662721065?e=2147483647&v=beta&t=Axf937IxcRcbL1nUwdlBRTv0oB8ZtjtdA6UXTWqgNl4',
    quote: `His personality and willingness to take on new challenges is one of, if not, the best I have ever seen. He has been an excellent support for the PM and a fantastic mentor for his team. His knowledge and dedication have helped get web and other projects through some difficult times. His focus on positive mentorship has helped repair some damage from poor mentors in the past. I am happy to work with him.`
  },
  {
    name: 'Hanna Littlefield',
    designation: 'Frontend Software Engineer',
    company: 'Learning Portrait',
    src: 'https://hannamlittlefield.github.io/static/media/ProfilePhoto.90ea6907.jpg',
    quote: `I've had the absolute pleasure of having Daniel as my software development mentor for the last two years. When we started working together, I didn't know a single line of code. Since then, he has helped me work my way through Javascript, React, Bootstrap, Agile methodologies, and more. He is a phenomenal mentor who adjusts his teaching and explanations well to any kind of learning preference. He provided clear and concise answers to my questions, and spent as much time as needed with me on different topics and concepts. If I could not wrap my head around something, he would find another way to explain it, or find resources to aid in my learning. He supplied me with a plethora of learning materials geared towards my preference of learning style- and spent time peer programming with me and focusing on topics I was struggling with, or had a passion to learn. He worked with me to define a capstone project that piqued my interest, and assisted in moving the project along. When I was frustrated or felt defeated, he always had the perfect approach to setting me back on track and in the right mindset. He is constantly encouraging and patient, and has dedicated a vast amount of time and resources on my learning adventure. He celebrated wholeheartedly each and every one of my 'win's with me - whether it was completing a major certificate, solving a difficult problem, finishing a project, or landing my first job. With his tutelage, after two years of learning, I accepted a Junior Developer job at a phenomenal company. Even though I'm now a full-time developer, Daniel is still there as a resource for me to reach out to when I am stuck on a problem, or need some words of advice. I would highly recommend Daniel as a mentor, and I vastly owe my new career in software development to his mentoring and guidance!`
  }
]

export const state = {
  name: 'Daniel Greener-Vigil',
  title: `Software Engineer | Tech Lead | Mentor`,
  aboutText: `<p>With over ${new Date().getFullYear() - 2014} years of experience as a Software Engineer, I am driven by a deep passion for learning and a commitment to continuous improvement. This passion fuels everything I do—whether it's tackling new technologies, leading teams through complex challenges, or mentoring the next generation of developers. I thrive in environments where innovation meets collaboration, and I am always eager to take on new challenges that push both my skills and my team’s abilities to new heights.</p>
  <p>Throughout my career, I've had the opportunity to work on a broad range of projects, leveraging a diverse set of technologies, including:</p></br>
  <ul class="about-list">
    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React React Native, Next.JS, Svelte, SolidJS, Tailwind, Bootstrap, Material UI, NPM, Yarn, PNPM, Turborepo, Storybook.</li>
    <li><strong>Backend:</strong> Node.js, Express, Java, Spring Boot, GraphQL, RESTful APIs, Prisma, PostgreSQL, MySQL, Redux.</li>
    <li><strong>Testing:</strong> Jest, React Testing Library, Enzyme, JUnit, Mockito.</li>
    <li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins, GitHub Actions, Azure, Heroku, Netlify, Vercel.</li>
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
  ], 
  testimonials: [...testimonials],
};
