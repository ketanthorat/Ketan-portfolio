'use client';

import { useState } from 'react';
import { Flex, Heading, Text, SmartImage, RevealFx } from '@/once-ui/components';
import styles from './AboutContent.module.css';

interface AboutContentProps {
    about: any;
}

export default function AboutContent({ about }: AboutContentProps) {
    const [activeTab, setActiveTab] = useState('intro');

    const tabs = [
        { id: 'intro', label: about.intro.title, display: about.intro.display },
        { id: 'work', label: about.work.title, display: about.work.display },
        { id: 'studies', label: about.studies.title, display: about.studies.display },
        { id: 'technical', label: about.technical.title, display: about.technical.display },
    ].filter(tab => tab.display);

    return (
        <div className={styles.contentWrapper}>
            {/* Tab Navigation */}
            <div className={styles.tabNavigation}>
                <div className={styles.tabContainer}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                        >
                            {tab.label}
                            {activeTab === tab.id && <div className={styles.activeIndicator}></div>}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
                {/* Introduction */}
                {activeTab === 'intro' && about.intro.display && (
                    <div className={styles.contentSection} key="intro">
                        <RevealFx translateY="20">
                            <Heading as="h2" variant="display-strong-l" className={styles.contentTitle}>
                                {about.intro.title}
                            </Heading>
                        </RevealFx>

                        <div className={styles.introLayout}>
                            <RevealFx translateY="20" delay={0.1}>
                                <div className={styles.introMainCard}>
                                    <div className={styles.introHighlight}>
                                        <Text variant="body-default-l" className={styles.introLeadText}>
                                            Ketan Thorat is a dynamic <span className={styles.highlight}>Robotics Engineer</span> and innovator passionate about advancing the frontiers of <span className={styles.highlight}>robotics, AI, IoT, and automation</span>.
                                        </Text>
                                    </div>

                                    <div className={styles.introBody}>
                                        <Text variant="body-default-m" onBackground="neutral-medium">
                                            Currently pursuing a <strong>B.Tech in Robotics & Automation</strong>, he has led impactful projects integrating <strong>ROS2</strong>, <strong>LLMs</strong>, <strong>Autonomous Mobile Robots (AMR)</strong>, <strong>Autonomous Guided Vehicles (AGV)</strong>, <strong>PLC-based systems</strong>, LiDAR, drones, and industrial automation systems.
                                        </Text>

                                        <Text variant="body-default-m" onBackground="neutral-medium">
                                            His work bridges academic research and real-world applications, with experience at <strong>Trimurti Enterprises</strong>, <strong>Swara Technology</strong>, and <strong>BeagleBoard</strong>.
                                        </Text>

                                        <Text variant="body-default-m" onBackground="neutral-medium">
                                            As <strong>Organization Manager at ML Nashik</strong>, Ketan fosters tech-driven communities and knowledge exchange, conducting seminars on cutting-edge technologies.
                                        </Text>

                                        <Text variant="body-default-m" onBackground="neutral-medium">
                                            With multiple national awards, research publications, and open-source contributions, his vision lies in building intelligent, collaborative robotic systems that drive industrial and societal transformation.
                                        </Text>
                                    </div>
                                </div>
                            </RevealFx>

                            <div className={styles.introSidebar}>
                                <RevealFx translateY="20" delay={0.2}>
                                    <div className={styles.highlightCard}>
                                        <div className={styles.cardIcon}>🎓</div>
                                        <Text variant="heading-strong-s">Education</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak">
                                            B.Tech in Robotics & Automation
                                        </Text>
                                    </div>
                                </RevealFx>

                                <RevealFx translateY="20" delay={0.3}>
                                    <div className={styles.highlightCard}>
                                        <div className={styles.cardIcon}>🤖</div>
                                        <Text variant="heading-strong-s">Expertise</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak">
                                            ROS2, LLMs, AMR, AGV, PLC, IoT, AI
                                        </Text>
                                    </div>
                                </RevealFx>

                                <RevealFx translateY="20" delay={0.4}>
                                    <div className={styles.highlightCard}>
                                        <div className={styles.cardIcon}>🏆</div>
                                        <Text variant="heading-strong-s">Achievements</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak">
                                            National Awards & Publications
                                        </Text>
                                    </div>
                                </RevealFx>

                                <RevealFx translateY="20" delay={0.5}>
                                    <div className={styles.highlightCard}>
                                        <div className={styles.cardIcon}>👥</div>
                                        <Text variant="heading-strong-s">Community</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak">
                                            ML Nashik, FOSS United Nashik, ROS India
                                        </Text>
                                    </div>
                                </RevealFx>
                            </div>
                        </div>
                    </div>
                )}

                {/* Work Experience */}
                {activeTab === 'work' && about.work.display && (
                    <div className={styles.contentSection} key="work">
                        <RevealFx translateY="20">
                            <Heading as="h2" variant="display-strong-l" className={styles.contentTitle}>
                                Work Experience
                            </Heading>
                        </RevealFx>

                        <div className={styles.timeline}>
                            {about.work.experiences.map((experience: any, index: number) => (
                                <RevealFx key={`${experience.company}-${index}`} translateY="20" delay={index * 0.1}>
                                    <div className={styles.timelineItem}>
                                        <div className={styles.timelineDot}></div>
                                        <div className={styles.experienceCard}>
                                            <div className={styles.experienceHeader}>
                                                <div className={styles.experienceInfo}>
                                                    <Text variant="heading-strong-l">{experience.company}</Text>
                                                    <Text variant="body-default-m" onBackground="brand-weak">
                                                        {experience.role}
                                                    </Text>
                                                </div>
                                                <div className={styles.experienceMeta}>
                                                    <Text variant="body-default-s" onBackground="neutral-weak">
                                                        📅 {experience.timeframe}
                                                    </Text>
                                                </div>
                                            </div>
                                            <Flex as="ul" direction="column" gap="12" className={styles.achievementsList}>
                                                {experience.achievements.map((achievement: any, idx: number) => (
                                                    <Text key={idx} as="li" variant="body-default-m">
                                                        {achievement}
                                                    </Text>
                                                ))}
                                            </Flex>
                                        </div>
                                    </div>
                                </RevealFx>
                            ))}
                        </div>
                    </div>
                )}

                {/* Studies */}
                {activeTab === 'studies' && about.studies.display && (
                    <div className={styles.contentSection} key="studies">
                        <RevealFx translateY="20">
                            <Heading as="h2" variant="display-strong-l" className={styles.contentTitle}>
                                {about.studies.title}
                            </Heading>
                        </RevealFx>

                        {/* Formal Education */}
                        <div className={styles.educationTimeline}>
                            {about.studies.institutions.map((institution: any, index: number) => (
                                <RevealFx key={`${institution.name}-${index}`} translateY="20" delay={index * 0.1}>
                                    <div className={styles.educationItem}>
                                        <div className={styles.educationDot}></div>
                                        <div className={styles.educationCard}>
                                            <div className={styles.educationHeader}>
                                                <div className={styles.educationInfo}>
                                                    <Text variant="heading-strong-l">{institution.name}</Text>
                                                    <Text variant="heading-default-m" onBackground="brand-weak">
                                                        {institution.degree} {institution.field && `in ${institution.field}`}
                                                    </Text>
                                                </div>
                                                <div className={styles.educationMeta}>
                                                    <Text variant="body-default-s" onBackground="neutral-weak">
                                                        📅 {institution.timeframe}
                                                    </Text>
                                                    <Text variant="body-default-s" onBackground="neutral-weak">
                                                        📍 {institution.location}
                                                    </Text>
                                                    {institution.grade && (
                                                        <Text variant="body-default-s" onBackground="accent-weak">
                                                            🎯 {institution.grade}
                                                        </Text>
                                                    )}
                                                </div>
                                            </div>
                                            <Text variant="body-default-m" onBackground="neutral-medium">
                                                {institution.description}
                                            </Text>
                                            {institution.achievements && institution.achievements.length > 0 && (
                                                <Flex as="ul" direction="column" gap="8" className={styles.achievementsList}>
                                                    {institution.achievements.map((achievement: string, idx: number) => (
                                                        <Text key={idx} as="li" variant="body-default-s">
                                                            {achievement}
                                                        </Text>
                                                    ))}
                                                </Flex>
                                            )}
                                        </div>
                                    </div>
                                </RevealFx>
                            ))}
                        </div>

                        {/* Certifications & Training */}
                        {about.studies.certifications && about.studies.certifications.length > 0 && (
                            <>
                                <RevealFx translateY="20" delay={0.4}>
                                    <Heading as="h3" variant="heading-strong-l" className={styles.subsectionTitle}>
                                        Additional Learning & Certifications
                                    </Heading>
                                </RevealFx>
                                <div className={styles.certificationsGrid}>
                                    {about.studies.certifications.map((cert: any, index: number) => (
                                        <RevealFx key={`${cert.name}-${index}`} translateY="20" delay={0.5 + index * 0.1}>
                                            <div className={styles.certificationCard}>
                                                <div className={styles.certIcon}>📜</div>
                                                <Text variant="heading-strong-m">{cert.name}</Text>
                                                <Text variant="body-default-m" onBackground="brand-weak">
                                                    {cert.program}
                                                </Text>
                                                {cert.subtitle && (
                                                    <Text variant="body-default-s" onBackground="neutral-weak">
                                                        {cert.subtitle}
                                                    </Text>
                                                )}
                                                <Text variant="body-default-xs" onBackground="neutral-weak">
                                                    📅 {cert.timeframe}
                                                </Text>
                                                <Text variant="body-default-s" onBackground="neutral-medium">
                                                    {cert.description}
                                                </Text>
                                            </div>
                                        </RevealFx>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Workshops & Technical Exposure */}
                        {about.studies.workshops && about.studies.workshops.length > 0 && (
                            <>
                                <RevealFx translateY="20" delay={0.8}>
                                    <Heading as="h3" variant="heading-strong-l" className={styles.subsectionTitle}>
                                        Workshops & Technical Exposure
                                    </Heading>
                                </RevealFx>
                                <RevealFx translateY="20" delay={0.9}>
                                    <div className={styles.workshopsContainer}>
                                        <Flex wrap gap="16">
                                            {about.studies.workshops.map((workshop: string, index: number) => (
                                                <div key={index} className={styles.workshopTag}>
                                                    <Text variant="body-default-s">✨ {workshop}</Text>
                                                </div>
                                            ))}
                                        </Flex>
                                    </div>
                                </RevealFx>
                            </>
                        )}
                    </div>
                )}

                {/* Technical Skills */}
                {activeTab === 'technical' && about.technical.display && (
                    <div className={styles.contentSection} key="technical">
                        <RevealFx translateY="20">
                            <Heading as="h2" variant="display-strong-l" className={styles.contentTitle}>
                                {about.technical.title}
                            </Heading>
                        </RevealFx>

                        <div className={styles.skillsGrid}>
                            {about.technical.skills.map((skill: any, index: number) => (
                                <RevealFx key={`${skill.title}-${index}`} translateY="20" delay={index * 0.1}>
                                    <div className={styles.skillCard}>
                                        {/* Skill Header */}
                                        <div className={styles.skillHeader}>
                                            {skill.icon && (
                                                <div className={styles.skillIcon}>{skill.icon}</div>
                                            )}
                                            <div className={styles.skillTitleGroup}>
                                                <Text variant="heading-strong-l">{skill.title}</Text>
                                                {skill.category && (
                                                    <div className={styles.skillCategory}>
                                                        <Text variant="body-default-xs" onBackground="brand-weak">
                                                            {skill.category}
                                                        </Text>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Skill Description */}
                                        <Text variant="body-default-m" onBackground="neutral-medium" className={styles.skillDescription}>
                                            {skill.description}
                                        </Text>

                                        {/* Skill Details */}
                                        {skill.details && skill.details.length > 0 && (
                                            <Flex as="ul" direction="column" gap="8" className={styles.skillDetailsList}>
                                                {skill.details.map((detail: string, idx: number) => (
                                                    <Text key={idx} as="li" variant="body-default-s" onBackground="neutral-weak">
                                                        {detail}
                                                    </Text>
                                                ))}
                                            </Flex>
                                        )}

                                        {/* Technologies */}
                                        {skill.technologies && skill.technologies.length > 0 && (
                                            <div className={styles.technologiesContainer}>
                                                <Flex wrap gap="8">
                                                    {skill.technologies.map((tech: string, idx: number) => (
                                                        <div key={idx} className={styles.techBadge}>
                                                            <Text variant="body-default-xs">{tech}</Text>
                                                        </div>
                                                    ))}
                                                </Flex>
                                            </div>
                                        )}

                                        {/* Images (if any) */}
                                        {skill.images && skill.images.length > 0 && (
                                            <Flex fillWidth paddingTop="m" gap="12" wrap>
                                                {skill.images.map((image: any, idx: number) => (
                                                    <Flex
                                                        key={idx}
                                                        border="neutral-medium"
                                                        radius="m"
                                                        minWidth={image.width} height={image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={image.width.toString()}
                                                            alt={image.alt}
                                                            src={image.src} />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        )}
                                    </div>
                                </RevealFx>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
