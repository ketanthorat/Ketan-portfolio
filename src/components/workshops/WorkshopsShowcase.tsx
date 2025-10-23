"use client";

import { useState } from 'react';
import { Flex, Heading, Text, Tag, RevealFx } from '@/once-ui/components';
import styles from './WorkshopsShowcase.module.scss';

interface Workshop {
    id: string;
    title: string;
    date: string;
    location: string;
    organization: string;
    description: string;
    topics: string[];
    attendees?: string;
    image?: string;
    category: 'robotics' | 'ai-ml' | 'iot' | 'ros' | 'community' | 'industrial';
}

const workshopsData: Workshop[] = [
    {
        id: 'ros2-beginners-july-2025',
        title: 'ROS 2 for Beginners: Publish, Subscribe, and Move!',
        date: 'July 2025',
        location: 'Nashik, India',
        organization: 'FOSS United Nashik',
        description: 'Comprehensive seminar covering ROS2 vs ROS1 comparison, different versions, and hardware demonstrations including prosthetic hand control with live demos in Rviz and Gazebo.',
        topics: ['ROS2', 'ROS1', 'Prosthetic Hand', 'Rviz', 'Gazebo', 'Hardware Demo'],
        attendees: '60',
        image: '/images/ROS2.jpeg',
        category: 'ros'
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
        image: '/images/Gemma LLM.jpeg',
        category: 'ai-ml'
    },
    {
        id: 'llms-edge-devices-2025',
        title: 'Running LLMs on Edge Devices',
        date: '2025',
        location: 'Nashik, India',
        organization: 'ML Nashik – Build with AI 2025',
        description: 'Technical seminar focused on deploying Large Language Models on edge devices using Ollama, Hugging Face transformers, pre-trained LLMs, and IoT edge deployment techniques.',
        topics: ['Ollama', 'Hugging Face', 'Transformers', 'Pre-trained LLMs', 'IoT', 'Edge Deployment'],
        attendees: '180',
        image: '/images/Running LLM.jpeg',
        category: 'ai-ml'
    },
    {
        id: 'hardware-open-source-feb-2024',
        title: 'The Fusion of Hardware and Open Source',
        date: 'February 2024',
        location: 'Nashik, India',
        organization: 'FOSS United Nashik Meetup',
        description: 'Seminar exploring the intersection of open-source hardware and robotics, covering ROS, electronics fundamentals, and visualization tools like Rviz, Rqt, and Gazebo.',
        topics: ['Open Source Hardware', 'ROS', 'Electronics', 'Rviz', 'Rqt', 'Gazebo'],
        attendees: '56',
        image: '/images/Fusion of Hardware.jpeg',
        category: 'community'
    },
    {
        id: 'robotics-startup-webinar',
        title: 'Want to Build the Next Big Robotics Startup?',
        date: '2024',
        location: 'Online',
        organization: 'FinCulture – Podcast',
        description: 'Webinar discussing startup entrepreneurship in robotics, covering business strategies, technical challenges, and techniques for building successful robotics ventures.',
        topics: ['Startup', 'Entrepreneurship', 'Robotics Business', 'Innovation', 'Strategy'],
        attendees: 'N/A',
        image: '/images/Finculture.jpeg',
        category: 'community'
    },
    {
        id: 'convergence-robotics-ai-iot',
        title: 'The Convergence of Robotics, AI, and IoT',
        date: '2024',
        location: 'PVG Nashik College',
        organization: 'PVG Nexus Club',
        description: 'Seminar exploring the convergence of three major technologies: IoT, ROS, and open-source hardware, demonstrating how they work together in modern robotics applications.',
        topics: ['IoT', 'ROS', 'Open Source Hardware', 'AI Integration', 'Robotics'],
        attendees: '142',
        image: '/images/Convergence.jpeg',
        category: 'robotics'
    },
    {
        id: 'gsm-irrigation-iot',
        title: 'GSM Based Irrigation System & IoT Tracking',
        date: '2024',
        location: 'Nashik, India',
        organization: 'ML Nashik – AI Unplugged',
        description: 'Technical seminar covering IoT applications in agriculture, ROS integration, TensorFlow Lite for edge computing, PyTorch implementations, and open-source hardware solutions.',
        topics: ['IoT', 'ROS', 'TensorFlow Lite', 'PyTorch', 'Open Source Hardware', 'Agriculture'],
        attendees: '160',
        image: '/images/GSM.jpeg',
        category: 'iot'
    },
    {
        id: 'revolution-robotics-ai',
        title: 'Revolution of Robotics & AI',
        date: '2023',
        location: 'Online',
        organization: 'Studentpreneur Club – Webinar',
        description: 'Comprehensive webinar covering the basics of robotics including mechanisms, Robot Operating System (ROS), and the revolutionary impact of AI in modern robotics.',
        topics: ['Robotics Basics', 'Mechanisms', 'ROS', 'AI in Robotics', 'Automation'],
        attendees: '120',
        image: '/images/Revolution of AI.jpeg',
        category: 'robotics'
    },
    {
        id: 'ieee-msit-rna-hackathon',
        title: 'IEEE MSIT - RNA Club Hackathon',
        date: '2024',
        location: 'Online',
        organization: 'MSIT IEEE CLUB',
        description: 'Served as a judge for the IEEE MSIT RNA Club hackathon, evaluating innovative projects and providing mentorship to 96 participants across various technology domains.',
        topics: ['Hackathon', 'Judging', 'Mentorship', 'Innovation', 'Technology'],
        attendees: '96',
        image: '/images/IEEE.jpeg',
        category: 'community'
    }
];

const categories = [
    { id: 'all', label: 'All Workshops', icon: 'calendar' },
    { id: 'ai-ml', label: 'AI/ML', icon: 'brain' },
    { id: 'robotics', label: 'Robotics', icon: 'robot' },
    { id: 'ros', label: 'ROS', icon: 'settings' },
    { id: 'iot', label: 'IoT', icon: 'wifi' },
    { id: 'industrial', label: 'Industrial', icon: 'factory' },
    { id: 'community', label: 'Community', icon: 'people' }
];

export function WorkshopsShowcase() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredWorkshops = selectedCategory === 'all'
        ? workshopsData
        : workshopsData.filter(w => w.category === selectedCategory);

    return (
        <Flex fillWidth direction="column" gap="xl" paddingX="l" paddingY="xl">
            {/* Header Section */}
            <RevealFx translateY="4">
                <Flex direction="column" gap="m" maxWidth="xl" alignItems="center" textAlign="center">
                    <Heading variant="display-strong-xl">
                        🎓 Workshops & Events
                    </Heading>
                    <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: '800px' }}>
                        Conducted 50+ technical workshops, seminars, and community events on robotics, AI/ML, and IoT,
                        reaching 1500+ participants across institutions and tech communities.
                    </Text>
                    <Flex gap="s" wrap justifyContent="center">
                        <Tag size="l">🎤 50+ Events</Tag>
                        <Tag size="l">👥 1500+ Participants</Tag>
                        <Tag size="l">🏆 Community Leader</Tag>
                    </Flex>
                </Flex>
            </RevealFx>

            {/* Category Filter */}
            <RevealFx translateY="4" delay={0.1}>
                <Flex gap="s" wrap justifyContent="center" className={styles.categoryFilter}>
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

            {/* Workshops Grid */}
            <div className={styles.workshopsGrid}>
                {filteredWorkshops.map((workshop, index) => (
                    <RevealFx key={workshop.id} translateY="20" delay={index * 0.05}>
                        <div className={styles.workshopCard}>
                            {/* Workshop Image */}
                            <div className={styles.workshopImage}>
                                {workshop.image ? (
                                    <img 
                                        src={workshop.image} 
                                        alt={workshop.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        <Text variant="display-strong-xl">
                                            {workshop.title.charAt(0)}
                                        </Text>
                                    </div>
                                )}
                                {workshop.attendees && (
                                    <div className={styles.attendeesBadge}>
                                        <Text variant="body-default-xs">👥 {workshop.attendees}</Text>
                                    </div>
                                )}
                            </div>

                            {/* Workshop Content */}
                            <div className={styles.workshopContent}>
                                <Flex direction="column" gap="8">
                                    <Flex alignItems="center" gap="s" wrap>
                                        <Tag size="s">{workshop.date}</Tag>
                                        <Text variant="body-default-xs" onBackground="neutral-weak">
                                            📍 {workshop.location}
                                        </Text>
                                    </Flex>

                                    <Heading variant="heading-strong-m" style={{ lineHeight: '1.3' }}>
                                        {workshop.title}
                                    </Heading>

                                    <Text variant="body-default-s" onBackground="brand-weak">
                                        {workshop.organization}
                                    </Text>

                                    <Text variant="body-default-s" onBackground="neutral-medium" style={{ lineHeight: '1.5' }}>
                                        {workshop.description}
                                    </Text>
                                </Flex>

                                {/* Topics */}
                                <Text variant="body-default-xs" onBackground="neutral-weak">
                                    {workshop.topics.join(', ')}
                                </Text>
                            </div>
                        </div>
                    </RevealFx>
                ))}
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
                        <Heading variant="display-strong-xl">50+</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Workshops</Text>
                    </div>
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">1500+</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Participants</Text>
                    </div>
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">6+</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Categories</Text>
                    </div>
                    <div className={styles.statCard}>
                        <Heading variant="display-strong-xl">🎓</Heading>
                        <Text variant="body-default-m" onBackground="neutral-weak">Community Leader</Text>
                    </div>
                </Flex>
            </RevealFx>
        </Flex>
    );
}
