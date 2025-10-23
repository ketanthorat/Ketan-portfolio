import { Flex } from '@/once-ui/components';
import { baseURL, workshops } from '@/app/resources';
import { WorkshopsShowcase } from '@/components/workshops/WorkshopsShowcase';

export async function generateMetadata() {
    const title = workshops.title;
    const description = workshops.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/workshops`,
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

export default function Workshops() {
    return (
        <Flex
            fillWidth
            maxWidth="xl"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: workshops.title,
                        description: workshops.description,
                        url: `https://${baseURL}/workshops`,
                        image: `${baseURL}/og?title=${encodeURIComponent(workshops.title)}`,
                    }),
                }}
            />
            <WorkshopsShowcase />
        </Flex>
    );
}
