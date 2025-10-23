import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Column } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { getPosts } from '@/app/utils/utils';

import { baseURL, routes } from '@/app/resources'; 
import { home, about, person, newsletter } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { FeaturedWorkshops } from '@/components/home/FeaturedWorkshops';
import { ProjectsGallery } from '@/components/home/ProjectsGallery';
import styles from './page.module.css';

export async function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home() {
	const allBlogs = getPosts(['src', 'app', 'blog', 'posts']);
	const sortedBlogs = allBlogs.sort((a, b) => {
		return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
	});

	return (
		<div className={styles.pageContainer}>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			
			{/* Full-Height Hero Section */}
			<section className={styles.heroSection}>
				<div className={styles.heroBackground}>
					<div className={styles.gradientOrb1}></div>
					<div className={styles.gradientOrb2}></div>
					<div className={styles.gridPattern}></div>
				</div>
				<div className={styles.heroContent}>
					<div className={styles.heroInner}>
						{about.avatar.display && (
							<RevealFx translateY="8" delay={0.1}>
								<div className={styles.avatarWrapper}>
									<Avatar src={person.avatar} size="xl"/>
								</div>
							</RevealFx>
						)}
						<RevealFx translateY="12" delay={0.2}>
							<Heading variant="display-strong-xl" style={{ textAlign: 'center' }}>
								{person.name}
							</Heading>
						</RevealFx>
						<RevealFx translateY="12" delay={0.3}>
							<Text variant="display-default-l" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
								{person.role}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4} fillWidth justifyContent="center" paddingTop="m">
							<Text
								wrap="balance"
								onBackground="neutral-medium"
								variant="body-default-l"
								style={{ textAlign: 'center', maxWidth: '700px' }}>
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.5} justifyContent="center" paddingTop="l">
							<Flex gap="12" wrap justifyContent="center">
								<Button
									id="projects"
									data-border="rounded"
									href="/projects"
									variant="primary"
									size="l">
									View Projects
								</Button>
								<Button
									id="about"
									data-border="rounded"
									href="/about"
									variant="secondary"
									size="l">
									About Me
								</Button>
							</Flex>
						</RevealFx>
					</div>
				</div>
				<div className={styles.scrollIndicator}>
					<div className={styles.scrollLine}></div>
				</div>
			</section>

			{/* Workshops & Events Section */}
			<section className={styles.featuredSection}>
				<div className={styles.sectionHeader}>
					<RevealFx translateY="8">
						<Heading as="h2" variant="display-strong-s">🎓 Workshops & Events</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.1}>
						<Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
							Conducted 50+ technical workshops, seminars, and community events reaching 1500+ participants
						</Text>
					</RevealFx>
				</div>
				<div className={styles.featuredContent}>
					<FeaturedWorkshops />
					<RevealFx translateY="12" delay={0.3}>
						<div style={{ textAlign: 'center', marginTop: '2rem' }}>
							<Button
								href="/workshops"
								variant="primary"
								size="l">
								View All Workshops
							</Button>
						</div>
					</RevealFx>
				</div>
				<div className={styles.waveTransition}>
					<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0 C300,80 600,80 900,40 L1200,20 L1200,120 L0,120 Z" fill="var(--neutral-alpha-weak)"></path>
					</svg>
				</div>
			</section>

			{/* Content Creation Section */}
			{home.contentCreation.display && (
				<section className={styles.contentSection}>
					<div className={styles.contentBackground}></div>
					<div className={styles.contentContainer}>
						<div className={styles.contentHeader}>
							<RevealFx translateY="8">
								<Heading as="h2" variant="display-strong-s">{home.contentCreation.title}</Heading>
							</RevealFx>
							<RevealFx translateY="8" delay={0.1}>
								<Text onBackground="neutral-weak" variant="body-default-l" style={{ maxWidth: '700px', textAlign: 'center' }}>
									{home.contentCreation.description}
								</Text>
							</RevealFx>
						</div>

						<div className={styles.contentBody}>
							<RevealFx translateY="12" delay={0.2}>
								<div className={styles.topicsGrid}>
									{home.contentCreation.topics.map((topic, index) => (
										<div key={index} className={styles.topicCard}>
											<Text variant="body-default-m" onBackground="neutral-strong">
												{topic}
											</Text>
										</div>
									))}
								</div>
							</RevealFx>

							<RevealFx translateY="12" delay={0.3}>
								<div className={styles.platformsSection}>
									<Text variant="heading-strong-m" style={{ textAlign: 'center', marginBottom: '2rem' }}>
										Follow My Journey
									</Text>
									<div className={styles.platformsGrid}>
										{home.contentCreation.platforms.map((platform, index) => (
											<a
												key={index}
												href={platform.link}
												target="_blank"
												rel="noopener noreferrer"
												className={styles.platformCard}>
												<div className={styles.platformIcon}>
													<Flex
														alignItems="center"
														justifyContent="center"
														style={{ fontSize: '3rem' }}>
														{platform.name === 'LinkedIn' ? '💼' : '📸'}
													</Flex>
												</div>
												<Text variant="heading-strong-l">{platform.name}</Text>
												<Text variant="body-default-s" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
													{platform.description}
												</Text>
												<div className={styles.platformArrow}>
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</div>
											</a>
										))}
									</div>
								</div>
							</RevealFx>
						</div>
					</div>
				</section>
			)}

			{/* More Projects - Gallery Style */}
			<section className={styles.projectsSection}>
				<div className={styles.projectsBackground}>
					<div className={styles.floatingShape1}></div>
					<div className={styles.floatingShape2}></div>
				</div>
				<div className={styles.projectsContainer}>
					<div className={styles.sectionHeader}>
						<RevealFx translateY="8">
							<Heading as="h2" variant="display-strong-s">More Projects</Heading>
						</RevealFx>
						<RevealFx translateY="8" delay={0.1}>
							<Text variant="body-default-l" onBackground="neutral-weak" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
								Explore a diverse range of robotics, AI, and IoT innovations
							</Text>
						</RevealFx>
					</div>
					<RevealFx translateY="16" delay={0.2}>
						<ProjectsGallery />
					</RevealFx>
					<div style={{ textAlign: 'center', marginTop: '3rem' }}>
						<RevealFx translateY="12" delay={0.3}>
							<Button
								href="/projects"
								variant="primary"
								size="l">
								View All Projects
							</Button>
						</RevealFx>
					</div>
				</div>
			</section>

			{/* Newsletter - Full Width CTA */}
			{newsletter.display && (
				<section className={styles.newsletterSection}>
					<div className={styles.newsletterBackground}>
						<div className={styles.newsletterGradient}></div>
					</div>
					<div className={styles.newsletterContent}>
						<RevealFx translateY="12">
							<Mailchimp newsletter={newsletter} />
						</RevealFx>
					</div>
				</section>
			)}
		</div>
	);
}
