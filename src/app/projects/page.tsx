import { Flex } from '@/once-ui/components';
import { ProjectsShowcase } from '@/components/projects/ProjectsShowcase';
import { baseURL } from '@/app/resources';
import { person, projects } from '@/app/resources/content';

export async function generateMetadata() {
	const title = projects.title;
	const description = projects.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/projects/`,
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

export default function Projects() {
    return (
        <Flex
			fillWidth maxWidth="xl"
			direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: projects.title,
                        description: projects.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Robotics%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                    }),
                }}
            />
            <ProjectsShowcase />
        </Flex>
    );
}
