import { Avatar, Button, Flex, Heading, Icon, IconButton, Tag, Text, RevealFx } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import AboutContent from '@/components/about/AboutContent';
import styles from './about.module.css'
import { person, about, social } from '@/app/resources/content';

export async function generateMetadata() {
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/about`,
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

export default function About() {
    return (
        <div className={styles.pageContainer}>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:'))
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <div className={styles.heroOrb1}></div>
                    <div className={styles.heroOrb2}></div>
                </div>
                <div className={styles.heroContent}>
                    { about.avatar.display && (
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
                    <RevealFx translateY="12" delay={0.4}>
                        <Flex gap="12" alignItems="center" wrap justifyContent="center">
                            <Flex gap="8" alignItems="center">
                                <Icon onBackground="accent-weak" name="globe"/>
                                <Text variant="body-default-m">{person.location}</Text>
                            </Flex>
                            { person.languages.length > 0 && (
                                <Flex wrap gap="8">
                                    {person.languages.map((language, index) => (
                                        <Tag key={index} size="l">{language}</Tag>
                                    ))}
                                </Flex>
                            )}
                        </Flex>
                    </RevealFx>
                    {social.length > 0 && (
                        <RevealFx translateY="12" delay={0.5}>
                            <Flex gap="8" wrap justifyContent="center" className={styles.socialLinks}>
                                {social.map((item) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="secondary"/>
                                    )
                                ))}
                            </Flex>
                        </RevealFx>
                    )}
                    {about.calendar.display && (
                        <RevealFx translateY="12" delay={0.6}>
                            <Flex
                                fitWidth
                                border="brand-alpha-medium"
                                style={{ backdropFilter: 'blur(var(--static-space-1))' }}
                                background="brand-alpha-weak" radius="full"
                                padding="4" gap="8"
                                alignItems="center">
                                <Flex paddingLeft="12">
                                    <Icon name="calendar" onBackground="brand-weak"/>
                                </Flex>
                                <Flex paddingX="8">Schedule a call</Flex>
                                <IconButton
                                    href={about.calendar.link}
                                    data-border="rounded"
                                    variant="secondary"
                                    icon="chevronRight"/>
                            </Flex>
                        </RevealFx>
                    )}
                </div>
            </section>

            {/* Tabbed Content Section */}
            <AboutContent about={about} />
        </div>
    );
}
