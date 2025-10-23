"use client";

import { Flex, Heading, Text, Tag, RevealFx } from '@/once-ui/components';
import styles from './FeaturedWorkshops.module.css';

interface Workshop {
    id: string;
    title: string;
    date: string;
    location: string;
    organization: string;
    description: string;
    topics: string[];
    attendees?: string;
    image: string;
}

const featuredWorkshops: Workshop[] = [
    {
        id: 'ros2-beginners-july-2025',
        title: 'ROS 2 for Beginners: Publish, Subscribe, and Move!',
        date: 'July 2025',
        location: 'Nashik, India',
        organization: 'FOSS United Nashik',
        description: 'Comprehensive seminar covering ROS2 vs ROS1 comparison, different versions, and hardware demonstrations including prosthetic hand control with live demos in Rviz and Gazebo.',
        topics: ['ROS2', 'ROS1', 'Prosthetic Hand', 'Rviz', 'Gazebo', 'Hardware Demo'],
        attendees: '60',
        image: '/images/ROS2.jpeg'
    },
    {
        id: 'build-ai-assistant-2025',
        title: 'Build Your Own AI Assistant with Edge Devices (Gemma LLM)',
        date: '2025',
        location: 'Aurangabad, India',
        organization: 'GDG Aurangabad – Build with AI 2025',
        description: 'Hands-on workshop on building AI assistants using edge devices, covering Text-to-Speech, Speech-to-Text, ALSA driver usage, Hugging Face transformers, and edge deployment strategies.',
        topics: ['Gemma LLM', 'TTS', 'STT', 'ALSA Driver', 'Hugging Face', 'Edge Deployment'],
        attendees: '193',
        image: '/images/Gemma LLM.jpeg'
    }
];

export function FeaturedWorkshops() {
    return (
        <Flex fillWidth direction="column" gap="l">
            {featuredWorkshops.map((workshop, index) => (
                <RevealFx key={workshop.id} translateY="16" delay={index * 0.1}>
                    <div className={styles.workshopCard}>
                        <div className={styles.workshopImage}>
                            <img 
                                src={workshop.image} 
                                alt={workshop.title}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.add(styles.visible);
                                }}
                            />
                            <div className={styles.imagePlaceholder}>
                                <div className={styles.placeholderIcon}>
                                    {workshop.title.charAt(0)}
                                </div>
                            </div>
                            {workshop.attendees && (
                                <div className={styles.attendeesBadge}>
                                    👥 {workshop.attendees}
                                </div>
                            )}
                        </div>
                        <div className={styles.workshopContent}>
                            <div className={styles.workshopHeader}>
                                <Flex direction="column" gap="s">
                                    <Flex alignItems="center" gap="s" wrap>
                                        <Tag size="s">🎓 Workshop</Tag>
                                        <Tag size="s">{workshop.date}</Tag>
                                    </Flex>
                                    <Heading variant="heading-strong-l">
                                        {workshop.title}
                                    </Heading>
                                    <Text variant="body-default-s" onBackground="brand-weak">
                                        {workshop.organization}
                                    </Text>
                                    <Text variant="body-default-xs" onBackground="neutral-weak">
                                        📍 {workshop.location}
                                    </Text>
                                </Flex>
                            </div>
                            <div className={styles.workshopBody}>
                                <Text variant="body-default-m" onBackground="neutral-medium">
                                    {workshop.description}
                                </Text>
                                <div className={styles.topicsSection}>
                                    <Text variant="label-default-s" onBackground="neutral-weak">
                                        Topics:
                                    </Text>
                                    <Text variant="body-default-s" onBackground="neutral-medium">
                                        {workshop.topics.join(', ')}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealFx>
            ))}
        </Flex>
    );
}
