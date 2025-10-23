"use client";

import { useState } from 'react';
import { Flex, Heading, Text, Tag, Icon, RevealFx } from '@/once-ui/components';
import styles from './ProjectsShowcase.module.scss';

interface Project {
    id: string;
    title: string;
    year: string;
    organization: string;
    description: string;
    achievements: string[];
    techStack: string[];
    image?: string;
    category: 'industrial' | 'ai' | 'ros' | 'robotics' | 'iot' | 'competition';
}

const projectsData: Project[] = [
    {
        id: 'lidar-amr',
        title: 'LiDAR-Based AMR for Navigation, Obstacle Detection & Pallet Detection',
        year: '2025 (Ongoing)',
        organization: 'Fox Solutions Pvt. Ltd. (Final Year Industrial Project)',
        description: 'Developed an Autonomous Mobile Robot (AMR) for industrial environments to enhance material handling efficiency and safety.',
        achievements: [
            'Integrated LiDAR sensors with ROS2 for real-time navigation, obstacle detection, and pallet recognition',
            'Implemented SLAM (Simultaneous Localization and Mapping) and path planning algorithms for autonomous movement',
            'Achieved high-precision obstacle avoidance and pallet identification accuracy through sensor fusion',
            'Deployed on an industrial test floor for validation and efficiency benchmarking'
        ],
        techStack: ['ROS2', 'Python', 'LiDAR', 'Gazebo', 'OpenCV', 'RViz', 'Arduino', 'SLAM'],
        image: '/images/projects/lidar-amr.jpg',
        category: 'industrial'
    },
    {
        id: 'octo-cli',
        title: 'Octo-CLI – AI-Powered GitHub Repository Assistant',
        year: '2025',
        organization: 'Individual Project',
        description: 'Designed a Command-Line Interface (CLI) tool powered by Large Language Models (LLMs).',
        achievements: [
            'Enabled developers to perform code Q&A, repository summarization, and documentation generation using natural language queries',
            'Integrated git-like commands with features such as octo tell and octo ask for seamless AI-assisted development',
            'Focused on improving developer productivity by combining NLP and code understanding models'
        ],
        techStack: ['Python', 'LLMs (Ollama)', 'GitHub API', 'RAG Pipeline', 'Command-Line Automation'],
        image: '/images/projects/octo-cli.jpg',
        category: 'ai'
    },
    {
        id: 'apple-detection-drone',
        title: 'ROS2-Based Apple Detection Drone',
        year: '2024',
        organization: 'Research Project',
        description: 'Designed and simulated a vision-based drone for fruit detection and classification using YOLOv5 and TensorFlow.',
        achievements: [
            'Built the simulation environment in Gazebo for navigation and object recognition validation',
            'Developed a Streamlit web interface to visualize real-time camera feed and fruit detection results',
            'Integrated ROS2 nodes for image acquisition, path planning, and drone hardware control'
        ],
        techStack: ['ROS2', 'YOLOv5', 'TensorFlow', 'OpenCV', 'Python', 'Gazebo', 'Streamlit'],
        image: '/images/projects/apple-drone.jpg',
        category: 'ros'
    },
    {
        id: 'prosthetic-hand',
        title: 'ROS2-Based Prosthetic Hand',
        year: '2024',
        organization: 'Academic Project',
        description: 'Built a prosthetic hand prototype controlled via ROS2 publisher-subscriber nodes.',
        achievements: [
            'Interfaced Arduino servo motors with ROS2 using serial communication for finger actuation',
            'Developed control commands through Python nodes, allowing gesture-based movement',
            'Demonstrated potential for assistive robotics and rehabilitation applications'
        ],
        techStack: ['ROS2', 'Arduino', 'Python', 'Servo Motors', 'Serial Communication'],
        image: '/images/projects/prosthetic-hand.jpg',
        category: 'ros'
    },
    {
        id: 'robotic-arm',
        title: '4-DOF Articulated Robotic Arm',
        year: '2024',
        organization: 'Research & Development Project',
        description: 'Designed and fabricated a 4-Degree-of-Freedom robotic arm for high-precision pick-and-place tasks.',
        achievements: [
            'Implemented kinematics and inverse kinematics for accurate motion control',
            'Used servo motors and microcontrollers to achieve flexible robotic manipulation',
            'Calibrated motion parameters for repeatability and speed optimization'
        ],
        techStack: ['ROS2', 'Python', 'Arduino', 'SolidWorks', 'Servo Motors', 'Kinematics'],
        image: '/images/projects/robotic-arm.jpg',
        category: 'robotics'
    },
    {
        id: 'rocker-bogie',
        title: 'Rocker-Bogie Mechanism-Based Vehicle',
        year: '2024',
        organization: 'SY Robotics Project',
        description: 'Engineered a terrain-adaptive robotic vehicle using the Rocker-Bogie suspension system, similar to Mars rovers.',
        achievements: [
            'Integrated sensors and electronic controls for enhanced traction and stability on uneven surfaces',
            'Designed chassis and linkages to simulate off-road mobility and obstacle climbing'
        ],
        techStack: ['Embedded C', 'Arduino', 'DC Motors', 'Mechanical Design', 'Sensors'],
        image: '/images/projects/rocker-bogie.jpg',
        category: 'robotics'
    },
    {
        id: 'smart-irrigation',
        title: 'GSM-Based Smart Irrigation System',
        year: '2023',
        organization: 'Academic Project',
        description: 'Developed an automated irrigation system to control water flow using GSM communication.',
        achievements: [
            'Monitored soil moisture and tank levels with sensor feedback for intelligent water management',
            'Enabled farmers to operate pumps remotely via SMS commands',
            'Focused on sustainability and water conservation in agricultural automation'
        ],
        techStack: ['Arduino', 'GSM Module', 'Sensors (Soil Moisture, Ultrasonic)', 'Embedded C'],
        image: '/images/projects/smart-irrigation.jpg',
        category: 'iot'
    },
    {
        id: 'sumo-robot',
        title: 'Autonomous Sumo Robot',
        year: '2023',
        organization: 'First-Year Project',
        description: 'Designed a self-driven sumo robot capable of detecting opponents and pushing them out of a ring autonomously.',
        achievements: [
            'Used infrared and ultrasonic sensors for opponent detection and boundary awareness',
            'Tuned the control logic for aggressive movement and rapid response in competition environments'
        ],
        techStack: ['Arduino', 'IR Sensors', 'Ultrasonic Sensors', 'DC Motors'],
        image: '/images/projects/sumo-robot.jpg',
        category: 'competition'
    },
    {
        id: 'line-follower',
        title: 'Fastest Line Follower Robot',
        year: '2023',
        organization: 'Competition Project',
        description: 'Engineered a PID-controlled line follower robot with sub-millimeter precision for high-speed navigation.',
        achievements: [
            'Optimized PID constants for maximum responsiveness on sharp turns',
            'Achieved record-breaking lap times in college-level competitions'
        ],
        techStack: ['Arduino', 'IR Array Sensors', 'PID Control', 'DC Motors'],
        image: '/images/projects/line-follower.jpg',
        category: 'competition'
    },
    {
        id: 'maze-solver',
        title: 'Maze Solver Robot',
        year: '2022',
        organization: 'School Project',
        description: 'Programmed a maze-solving robot using wall-following and shortest-path algorithms.',
        achievements: [
            'Integrated ultrasonic sensors for distance measurement and decision-making',
            'Implemented path optimization logic for efficient exit identification'
        ],
        techStack: ['Arduino', 'Ultrasonic Sensors', 'C Programming', 'Path Planning'],
        image: '/images/projects/maze-solver.jpg',
        category: 'robotics'
    },
    {
        id: 'obstacle-avoiding',
        title: 'Obstacle Avoiding Robot',
        year: '2022',
        organization: 'Academic Project',
        description: 'Developed an autonomous mobile robot capable of avoiding obstacles using real-time sensor data.',
        achievements: [
            'Implemented sensor fusion and motor control algorithms for collision-free navigation',
            'Served as a foundation project for further work in autonomous robotics and AMR systems'
        ],
        techStack: ['Arduino', 'IR Sensors', 'Ultrasonic Sensors', 'C Programming'],
        image: '/images/projects/obstacle-avoiding.jpg',
        category: 'robotics'
    }
];

const categories = [
    { id: 'all', label: 'All Projects', icon: 'grid' },
    { id: 'industrial', label: 'Industrial', icon: 'factory' },
    { id: 'ai', label: 'AI/ML', icon: 'brain' },
    { id: 'ros', label: 'ROS2', icon: 'robot' },
    { id: 'robotics', label: 'Robotics', icon: 'settings' },
    { id: 'iot', label: 'IoT', icon: 'wifi' },
    { id: 'competition', label: 'Competition', icon: 'trophy' }
];

export function ProjectsShowcase() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProjects = selectedCategory === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === selectedCategory);

    return (
        <Flex fillWidth direction="column" gap="xl" paddingX="l" paddingY="xl">
            {/* Header Section */}
            <RevealFx translateY="4">
                <Flex direction="column" gap="m" maxWidth="xl" alignItems="center" textAlign="center">
                    <Heading variant="display-strong-xl">
                        🚀 Robotics & AI Projects
                    </Heading>
                    <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: '800px' }}>
                        Over 10+ robotics projects spanning autonomous navigation, prosthetics, AI vision, and industrial automation. 
                        Featured at AICTE IDEA Lab and ML Nashik Conferences for technical excellence.
                    </Text>
                    <Flex gap="s" wrap justifyContent="center">
                        <Tag size="l">🏆 Winner – Robotex India National & Zonal Championships</Tag>
                        <Tag size="l">📊 10+ Projects Completed</Tag>
                        <Tag size="l">🎯 Multiple Domains</Tag>
                    </Flex>
                </Flex>
            </RevealFx>

            {/* Category Filter */}
            <RevealFx translateY="4" delay={0.1}>
                <Flex gap="s" wrap className={styles.categoryFilter}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`${styles.categoryButton} ${selectedCategory === cat.id ? styles.active : ''}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </Flex>
            </RevealFx>

            {/* Projects Alternating Layout */}
            <div className={styles.projectsContainer}>
                {filteredProjects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <RevealFx key={project.id} translateY="20" delay={index * 0.1}>
                            <div className={styles.projectCard}>
                                <Flex 
                                    direction="row" 
                                    gap="xl" 
                                    fillWidth 
                                    alignItems="center"
                                    className={`${styles.projectContent} ${!isEven ? styles.reverse : ''}`}
                                >
                                    {/* Project Image */}
                                    <div className={styles.projectImage}>
                                        <div className={styles.imagePlaceholder}>
                                            <Text variant="heading-strong-xl">
                                                {project.title.charAt(0)}
                                            </Text>
                                        </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className={styles.projectDetails}>
                                        <Flex direction="column" gap="12">
                                            <Flex alignItems="center" gap="s" wrap>
                                                <Tag size="s">{project.year}</Tag>
                                                <Text variant="body-default-s" onBackground="neutral-weak">
                                                    {project.organization}
                                                </Text>
                                            </Flex>
                                            <Heading variant="heading-strong-l" style={{ lineHeight: '1.3' }}>
                                                {project.title}
                                            </Heading>
                                            <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: '1.6' }}>
                                                {project.description}
                                            </Text>
                                        </Flex>

                                        {/* Achievements */}
                                        <Flex direction="column" gap="10">
                                            {project.achievements.map((achievement, idx) => (
                                                <Flex key={idx} gap="s" alignItems="flex-start">
                                                    <Text variant="body-default-s" style={{ flexShrink: 0, marginTop: '2px' }}>✓</Text>
                                                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: '1.5', flex: 1 }}>
                                                        {achievement}
                                                    </Text>
                                                </Flex>
                                            ))}
                                        </Flex>

                                        {/* Tech Stack */}
                                        <Flex gap="8" wrap>
                                            {project.techStack.map((tech, idx) => (
                                                <Tag key={idx} size="s">{tech}</Tag>
                                            ))}
                                        </Flex>
                                    </div>
                                </Flex>
                            </div>
                        </RevealFx>
                    );
                })}
            </div>

            {/* Stats Section */}
            <RevealFx translateY="4" delay={0.2}>
                <Flex 
                    direction="row" 
                    gap="l" 
                    wrap 
                    justifyContent="center"
                    className={styles.statsSection}
                >
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">10+</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Projects</Text>
                    </div>
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">5+</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Technologies</Text>
                    </div>
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">3+</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Years</Text>
                    </div>
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">🏆</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">National Winner</Text>
                    </div>
                </Flex>
            </RevealFx>
        </Flex>
    );
}
