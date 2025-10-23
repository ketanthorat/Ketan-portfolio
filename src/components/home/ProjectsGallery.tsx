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
    { id: '1', title: 'ROS2 Workshop', category: 'Robotics', image: '/images/ROS2.jpeg' },
    { id: '2', title: 'Gemma LLM Workshop', category: 'AI/ML', image: '/images/Gemma LLM.jpeg' },
    { id: '3', title: 'Running LLM', category: 'AI/ML', image: '/images/Running LLM.jpeg' },
    { id: '4', title: 'Fusion of Hardware', category: 'Robotics', image: '/images/Fusion of Hardware.jpeg' },
];

const projectsRow2: Project[] = [
    { id: '5', title: 'Convergence', category: 'IoT', image: '/images/Convergence.jpeg' },
    { id: '6', title: 'GSM Irrigation', category: 'IoT', image: '/images/GSM.jpeg' },
    { id: '7', title: 'Revolution of AI', category: 'AI/ML', image: '/images/Revolution of AI.jpeg' },
    { id: '8', title: 'IEEE Event', category: 'Community', image: '/images/IEEE.jpeg' },
    { id: '9', title: 'FinCulture', category: 'Community', image: '/images/Finculture.jpeg' },
];

export function ProjectsGallery() {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryRow}>
                <div className={styles.scrollTrack} data-direction="left">
                    {[...projectsRow1, ...projectsRow1].map((project, index) => (
                        <div key={`${project.id}-${index}`} className={styles.projectCard}>
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className={styles.projectImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.galleryRow}>
                <div className={styles.scrollTrack} data-direction="right">
                    {[...projectsRow2, ...projectsRow2].map((project, index) => (
                        <div key={`${project.id}-${index}`} className={styles.projectCard}>
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className={styles.projectImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
