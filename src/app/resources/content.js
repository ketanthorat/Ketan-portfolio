import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ketan',
    lastName:  'Thorat',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Robotics & AI Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'India/Nashik', // Updated location
    languages: ['English', 'Hindi', 'Marathi', 'German']  // Languages retained
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about robotics, AI, and IoT, sharing insights on the intersection of innovation and technology.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ketanthorat',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/k2thorat/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/ketanthorat_ai',
    },
    {
        name: 'Instagram',
        icon: 'Instagram',
        link: 'https://www.instagram.com/ketanthorat.ai',
    },
    {
        name: 'YouTube',
        icon: 'Youtube',
        link: 'https://www.youtube.com/@ketanthorat-ai',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'ketanthorat.ai@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Robotics, AI, IoT, Machine Learning</>,
    subline: <>I'm {person.firstName}, a robotics engineer exploring AI-driven solutions and automation. After hours, I build impactful projects to make technology accessible.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendly.com/ketanthorat'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hi, I'm Ketan Thorat—a passionate robotics engineer, innovator, and entrepreneur driving advancements in robotics, AI, IoT, and automation. Explore my portfolio to discover my journey, projects, and vision for the future of robotics and automation.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Robonex Innovations',
                timeframe: 'Jan 2020 - Present',
                role: 'Founder & Robotics Engineer',
                achievements: [
                    <>Founded a robotics-focused company delivering cutting-edge solutions in automation and AI.</>,
                    <>Spearheaded robotics workshops and community engagement initiatives to inspire innovation.</>
                ],
                images: []
            },
            {
                company: 'ML Community Nashik',
                timeframe: 'Jul 2023 - Present',
                role: 'Community Manager',
                achievements: [
                    <>Organized AI and ML-focused events, fostering community growth and collaboration.</>,
                    <>Provided mentorship and technical guidance to budding engineers and enthusiasts.</>
                ],
                images: []
            },
            {
                company: 'Akudo Yaro',
                timeframe: 'Dec 2021 - Oct 2022',
                role: 'Community Management Intern',
                achievements: [
                    <>Managed community engagement strategies for Akudo, a neo-bank for teenagers.</>,
                    <>Helped organize events and campaigns to promote financial literacy among youth.</>
                ],
                images: []
            },
            {
                company: 'Engineer Hub',
                timeframe: 'Jan 2021 - Dec 2021',
                role: 'Technical Intern',
                achievements: [
                    <>Collaborated on technical projects focusing on IoT and automation solutions.</>,
                    <>Assisted in developing and deploying smart systems for educational use cases.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'RigBetel Labs',
                description: <>Learning ROS and robotics system integration.</>,
            },
            {
                name: 'XYZ University',
                description: <>Pursuing B.Tech in Robotics & Automation.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'ROS',
                description: <>Proficient in creating robotics applications with ROS and ROS 2.</>,
                images: []
            },
            {
                title: 'Python',
                description: <>Experienced in Python programming for AI and automation.</>,
                images: []
            },
            {
                title: 'IoT Systems',
                description: <>Skilled in developing IoT-based solutions for smart automation.</>,
                images: []
            },
            {
                title: 'Community Management',
                description: <>Expertise in managing and growing technical communities, organizing events, and engaging stakeholders.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about robotics and AI...',
    description: `Read what ${person.name} has been up to recently.`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Robotics and AI projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: []
}

export { person, social, newsletter, home, about, blog, work, gallery };
