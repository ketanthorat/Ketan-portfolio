import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Ketan',
    lastName:  'Thorat',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Robotics & AI Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata', // Nashik, India (IST timezone)
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
        icon: 'instagram',
        link: 'https://www.instagram.com/ketanthorat.ai',
    },
    {
        name: 'YouTube',
        icon: 'youtube',
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
    subline: <>Robotics engineer specializing in AI-driven automation, ROS2, and intelligent systems. Building the future of autonomous robotics—from AMRs and AGVs to PLC-based industrial solutions and LLM-powered applications.</>,
    contentCreation: {
        display: true,
        title: 'Content Creation',
        description: 'Sharing knowledge and insights on advanced technologies through engaging content across social platforms.',
        topics: [
            '🤖 Robotics & Automation',
            '🧠 Artificial Intelligence',
            '🔌 Internet of Things (IoT)',
            '⚙️ ROS2 & Autonomous Systems',
            '🏭 Industrial Automation & PLC',
            '🚗 AMR & AGV Technologies'
        ],
        platforms: [
            {
                name: 'LinkedIn',
                icon: 'linkedin',
                link: 'https://www.linkedin.com/in/k2thorat/',
                description: 'Professional insights, project updates, and industry trends'
            },
            {
                name: 'Instagram',
                icon: 'instagram',
                link: 'https://www.instagram.com/ketanthorat.ai',
                description: 'Behind-the-scenes, robotics demos, and tech showcases'
            }
        ]
    }
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
                    <>Founded a robotics and AI startup delivering innovative solutions in automation, ROS2, and IoT integration.</>,
                    <>Designed and deployed custom robotic systems, including AMRs, robotic arms, and sensor-based automation.</>,
                    <>Conducted robotics workshops and community sessions across institutions to foster tech innovation.</>,
                    <>Led a small R&D team in developing open-source robotics tools and educational robotics kits for students.</>
                ],
                images: []
            },
            {
                company: 'Trimurti Enterprises',
                timeframe: 'Feb 2025 - July 2025',
                role: 'Robotics Engineer Intern',
                achievements: [
                    <>Architected a robotic workcell integrating a 6-DOF arm, PLC, and vision system using ROS2 and EtherNet/IP.</>,
                    <>Developed a vision-guided control system in Python/C++ with OpenCV for object pose estimation.</>,
                    <>Enhanced system efficiency by 20% through optimized robot logic and motion planning in Gazebo simulations.</>
                ],
                images: []
            },
            {
                company: 'Swara Technology',
                timeframe: 'Dec 2024 - Jan 2025',
                role: 'Automation Intern',
                achievements: [
                    <>Programmed PLC ladder logic to automate industrial sorting systems.</>,
                    <>Integrated SCADA systems for real-time control and monitoring of process data.</>,
                    <>Developed and tested sensor-actuator interfacing for automation hardware validation.</>
                ],
                images: []
            },
            {
                company: 'BeagleBoard Foundation',
                timeframe: 'Jan 2024 - May 2024',
                role: 'Open Source Contributor',
                achievements: [
                    <>Contributed to docs.beagleboard.org documentation and hardware testing workflows.</>,
                    <>Developed a RAG pipeline using a locally hosted tiny-llama LLM with Ollama for documentation automation.</>,
                    <>Tested embedded board scripts and optimized bus communication verification processes.</>
                ],
                images: []
            },
            {
                company: 'ML Nashik (Google Developers Group Affiliate)',
                timeframe: 'Jul 2023 - Present',
                role: 'Organization Manager / Community Manager',
                achievements: [
                    <>Spearheaded AI/ML workshops, hackathons, and tech meetups for 1500+ members.</>,
                    <>Partnered with Google Developer Groups (GDG) and FOSS United to host technical events.</>,
                    <>Delivered talks on Edge AI, IoT, and Robotics frameworks such as TensorFlow, ROS2, and Hugging Face.</>,
                    <>Mentored students in AI model deployment, Kaggle competitions, and open-source projects.</>,
                    <>Organized large-scale AI/ML events promoting collaborative learning in the tech community.</>,
                    <>Facilitated mentorship programs and provided guidance to young developers and innovators.</>,
                    <>Coordinated with cross-domain experts to integrate AI/ML topics into real-world problem-solving.</>
                ],
                images: []
            },
            {
                company: 'Akudo',
                timeframe: 'Dec 2021 - Oct 2022',
                role: 'Community Management Intern',
                achievements: [
                    <>Managed community engagement strategies for Akudo, a fintech platform for teenagers.</>,
                    <>Organized financial literacy workshops and promotional campaigns to enhance user engagement.</>,
                    <>Supported the marketing and outreach team in building a digital community of 10,000+ users.</>
                ],
                images: []
            },
            {
                company: 'Engineer Hub',
                timeframe: 'Jan 2021 - Dec 2021',
                role: 'Technical Intern',
                achievements: [
                    <>Assisted in developing IoT-based automation systems for educational and industrial applications.</>,
                    <>Collaborated on smart system prototypes integrating microcontrollers and sensors.</>,
                    <>Supported the development of technical content and student robotics training modules.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'K.K. Wagh Institute of Engineering & Research',
                degree: 'Bachelor of Technology (B.Tech)',
                field: 'Robotics & Automation',
                location: 'Nashik, India',
                timeframe: 'Nov 2022 – June 2026',
                grade: '',
                description: <>Focused on robotics, AI, machine learning, control systems, and industrial automation. Engaged in projects using ROS1/ROS2, LiDAR, IoT, and drone systems.</>,
                achievements: [
                    '🏅 Research Paper Publication – MET International Conference 2025',
                    '🏆 AICTE IDEA LAB Project Exhibition – 1st Place (2023)',
                    '🌟 Technical Excellence Award – Team Matrix (2023)',
                    'Active in organizing technical workshops and community events through ML Nashik and FOSS United'
                ],
                type: 'degree'
            },
            {
                name: 'Champions Academy',
                degree: 'Higher Secondary Certificate (12th HSC)',
                field: 'Physics, Chemistry, and Mathematics',
                location: 'Kharghar, India',
                timeframe: 'June 2020 – March 2022',
                grade: '',
                description: <>Concentration in Physics, Chemistry, and Mathematics.</>,
                achievements: [],
                type: 'degree'
            },
            {
                name: 'Smt Radhikabai Meghe Vidyalaya',
                degree: 'Secondary School Certificate (10th SSC)',
                field: '',
                location: 'Airoli, India',
                timeframe: 'March 2020',
                grade: '',
                description: <>Recognized for academic excellence and technical curiosity in robotics at a young age.</>,
                achievements: [],
                type: 'degree'
            }
        ],
        certifications: [
            {
                name: 'RigBetel Labs',
                program: 'ROS2 Training Program',
                subtitle: 'Robotics System Integration',
                timeframe: '2024 – Present',
                description: <>Hands-on experience with ROS2 Foxy/Humble, node communication, sensor integration, and Gazebo simulations.</>,
                type: 'certification'
            },
            {
                name: 'RobotechX',
                program: 'ROS1 Course',
                subtitle: 'Fundamentals of Robot Operating System',
                timeframe: '2023',
                description: <>Learned publisher–subscriber model, RViz visualization, and robotic arm control.</>,
                type: 'certification'
            },
            {
                name: 'MyEquation Labs',
                program: 'Nano Degree in ROS2 & ROBOAI Program',
                subtitle: '',
                timeframe: '2023 – 2024',
                description: <>Studied autonomous navigation, AI integration, and robotics middleware.</>,
                type: 'certification'
            },
            {
                name: 'AICTE – IDEA LAB',
                program: 'Smart Manufacturing & Machine Tools Program',
                subtitle: '',
                timeframe: '2023',
                description: <>Gained exposure to CNC machines, PLCs, and industrial automation systems.</>,
                type: 'certification'
            }
        ],
        workshops: [
            'PLC & SCADA Workshop – AutoTech',
            'IoT & Robotics Workshop – Cognifront',
            'ROS2 Workshop – Cognifront',
            'Audit Visit – ABB Nashik (3 days industry training)'
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Robotics Frameworks',
                icon: '🤖',
                category: 'Core Expertise',
                description: <>Proficient in Robot Operating System (ROS/ROS2) and related frameworks for building autonomous robotic systems.</>,
                details: [
                    'ROS/ROS2 for robot middleware and communication',
                    'Moveit-2 for motion planning and manipulation',
                    'GAZEBO for physics-based simulation',
                    'SLAM and Nav2 Stack for autonomous navigation',
                    'RVIZ for 3D visualization and debugging',
                    'URDF for robot modeling and description',
                    'RTABMAP for real-time appearance-based mapping'
                ],
                technologies: ['ROS', 'ROS2', 'Moveit-2', 'GAZEBO', 'SLAM', 'Nav2', 'RVIZ', 'URDF', 'RTABMAP'],
                images: []
            },
            {
                title: 'Robotics Manipulator',
                icon: '🦾',
                category: 'Manipulation',
                description: <>Expertise in robotic arm kinematics, dynamics, and control for precise manipulation tasks.</>,
                details: [
                    'Forward and inverse kinematics analysis',
                    'Jacobian computation and velocity control',
                    'Dynamic modeling and trajectory planning',
                    'End-effector control and force analysis',
                    'Workspace analysis and singularity avoidance'
                ],
                technologies: ['Kinematics', 'Dynamics', 'Jacobian', 'Trajectory Planning', 'DH Parameters'],
                images: []
            },
            {
                title: 'Motion Planning & Optimization',
                icon: '🎯',
                category: 'Algorithms',
                description: <>Skilled in implementing path planning and optimization algorithms for autonomous navigation and decision-making.</>,
                details: [
                    'A* and Dijkstra for optimal path finding',
                    'RRT (Rapidly-exploring Random Tree) for motion planning',
                    'Genetic Algorithm for evolutionary optimization',
                    'Ant Colony Optimization for swarm intelligence',
                    'Particle Swarm Optimization for multi-objective problems'
                ],
                technologies: ['A*', 'Dijkstra', 'RRT', 'Genetic Algorithm', 'ACO', 'PSO'],
                images: []
            },
            {
                title: 'Computer Vision',
                icon: '👁️',
                category: 'Perception',
                description: <>Experienced in computer vision techniques for object detection, tracking, and scene understanding.</>,
                details: [
                    'OpenCV for image processing and feature extraction',
                    'YOLO v8 for real-time object detection',
                    'Image segmentation and classification',
                    'Camera calibration and stereo vision',
                    'Visual servoing for robotic control'
                ],
                technologies: ['OpenCV', 'YOLO v8', 'Image Processing', 'Object Detection', 'Feature Extraction'],
                images: []
            },
            {
                title: 'Programming Languages',
                icon: '💻',
                category: 'Software',
                description: <>Proficient in multiple programming languages for robotics, embedded systems, and system-level development.</>,
                details: [
                    'Python for rapid prototyping and AI/ML integration',
                    'C/C++ for real-time robotic control and performance',
                    'Linux platform for robotics deployment and development',
                    'Shell scripting for automation and system management'
                ],
                technologies: ['Python', 'C', 'C++', 'Linux', 'Bash', 'Shell Scripting'],
                images: []
            },
            {
                title: 'Sensors and Actuators',
                icon: '📡',
                category: 'Hardware',
                description: <>Hands-on experience with various sensors and actuators for robotic perception and control.</>,
                details: [
                    'LIDAR for 3D mapping and obstacle detection',
                    'Depth camera for 3D vision and point cloud processing',
                    'IMU for orientation and motion tracking',
                    'Wheel encoders for odometry and position estimation',
                    'Ultrasonic and IR sensors for proximity detection'
                ],
                technologies: ['LIDAR', 'Depth Camera', 'IMU', 'Encoders', 'Ultrasonic', 'IR Sensors'],
                images: []
            },
            {
                title: 'Embedded Electronics',
                icon: '⚡',
                category: 'Embedded',
                description: <>Skilled in embedded systems programming and hardware integration for robotics applications.</>,
                details: [
                    'NVIDIA Jetson for edge AI and GPU acceleration',
                    'Raspberry Pi for Linux-based robotics projects',
                    'ESP32 for IoT and wireless communication',
                    'Arduino for rapid prototyping and sensor integration',
                    'Microcontroller programming for real-time control'
                ],
                technologies: ['NVIDIA Jetson', 'Raspberry Pi', 'ESP32', 'Arduino', 'Microcontrollers'],
                images: []
            },
            {
                title: 'Prototyping Skills',
                icon: '🔧',
                category: 'Fabrication',
                description: <>Experienced in rapid prototyping and hardware fabrication for robotics development.</>,
                details: [
                    '3D Printing for custom mechanical parts',
                    'PCB Design and manufacturing for custom electronics',
                    'Laser cutting for precision fabrication',
                    'CAD modeling for mechanical design',
                    'Hardware assembly and integration'
                ],
                technologies: ['3D Printing', 'PCB Design', 'Laser Cutting', 'CAD', 'Soldering'],
                images: []
            },
            {
                title: 'CAD & Simulation',
                icon: '📐',
                category: 'Design',
                description: <>Experienced in 3D modeling, URDF creation, and robotic simulation environments.</>,
                details: [
                    'SolidWorks and Fusion 360 for mechanical design',
                    'URDF/XACRO modeling for robot description',
                    'Gazebo simulation for robot testing and validation',
                    '3D printing and rapid prototyping'
                ],
                technologies: ['SolidWorks', 'Fusion 360', 'URDF', 'Gazebo', 'MeshLab'],
                images: []
            },
            {
                title: 'Version Control & DevOps',
                icon: '🔄',
                category: 'Tools',
                description: <>Proficient in Git, Docker, and CI/CD pipelines for robotics software development.</>,
                details: [
                    'Git and GitHub for version control and collaboration',
                    'Docker containerization for ROS deployments',
                    'Linux system administration and shell scripting',
                    'Documentation and technical writing'
                ],
                technologies: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Vim'],
                images: []
            },
            {
                title: 'Community & Leadership',
                icon: '👥',
                category: 'Soft Skills',
                description: <>Expertise in managing and growing technical communities, organizing events, and engaging stakeholders.</>,
                details: [
                    'Organized 50+ technical workshops and hackathons',
                    'Mentored 100+ students in robotics and AI projects',
                    'Public speaking and technical presentation skills',
                    'Team leadership and project management'
                ],
                technologies: ['Workshop Facilitation', 'Mentorship', 'Public Speaking', 'Event Management'],
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

const projects = {
    label: 'Projects',
    title: 'My Projects',
    description: `Robotics and AI projects by ${person.name}`
}

const workshops = {
    label: 'Workshops',
    title: 'Workshops & Events',
    description: `Technical workshops and events conducted by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: []
}

export { person, social, newsletter, home, about, blog, projects, workshops, gallery };
