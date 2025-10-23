"use client";

import { useEffect, useRef } from 'react';
import styles from './ProjectsGallery.module.css';

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
}

const projectsRow1: Project[] = [
    { id: '1', title: 'Autonomous Robot', category: 'Robotics', image: '🤖' },
    { id: '2', title: 'AI Assistant', category: 'AI/ML', image: '🧠' },
    { id: '3', title: 'IoT Dashboard', category: 'IoT', image: '📊' },
    { id: '4', title: 'ROS Navigation', category: 'ROS', image: '🗺️' },
    { id: '5', title: 'Computer Vision', category: 'AI/ML', image: '👁️' },
    { id: '6', title: 'Smart Home', category: 'IoT', image: '🏠' },
];

const projectsRow2: Project[] = [
    { id: '7', title: 'Drone Control', category: 'Robotics', image: '🚁' },
    { id: '8', title: 'ML Pipeline', category: 'AI/ML', image: '⚙️' },
    { id: '9', title: 'Sensor Network', category: 'IoT', image: '📡' },
    { id: '10', title: 'Path Planning', category: 'ROS', image: '🛤️' },
    { id: '11', title: 'Edge AI', category: 'AI/ML', image: '💻' },
    { id: '12', title: 'Robotic Arm', category: 'Robotics', image: '🦾' },
];

export function ProjectsGallery() {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryRow}>
                <div className={styles.scrollTrack} data-direction="left">
                    {[...projectsRow1, ...projectsRow1].map((project, index) => (
                        <div key={`${project.id}-${index}`} className={styles.projectCard}>
                            <div className={styles.projectEmoji}>{project.image}</div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectTitle}>{project.title}</div>
                                <div className={styles.projectCategory}>{project.category}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.galleryRow}>
                <div className={styles.scrollTrack} data-direction="right">
                    {[...projectsRow2, ...projectsRow2].map((project, index) => (
                        <div key={`${project.id}-${index}`} className={styles.projectCard}>
                            <div className={styles.projectEmoji}>{project.image}</div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectTitle}>{project.title}</div>
                                <div className={styles.projectCategory}>{project.category}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
