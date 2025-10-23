import { Flex, Heading } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { BlogShowcase } from '@/components/blog/BlogShowcase';
import { getPosts } from '@/app/utils/utils';
import { baseURL } from '@/app/resources'
import { blog, person, newsletter } from '@/app/resources/content';

export async function generateMetadata() {

	const title = blog.title;
	const description = blog.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
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

export default function Blog() {
	const allBlogs = getPosts(['src', 'app', 'blog', 'posts']);
	const sortedBlogs = allBlogs.sort((a, b) => {
		return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
	});

    return (
			<Flex
				fillWidth
				direction="column"
				paddingX="l"
				paddingY="xl"
				gap="xl">
				<script
					type="application/ld+json"
					suppressHydrationWarning
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Blog',
							headline: blog.title,
							description: blog.description,
							url: `https://${baseURL}/blog`,
							image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
							author: {
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
				<Flex
					direction="column"
					gap="m"
					maxWidth="xl"
					alignItems="center"
					style={{ margin: '0 auto', textAlign: 'center' }}>
					<Heading
						variant="display-strong-xl">
						{blog.title}
					</Heading>
					{blog.description && (
						<Heading
							variant="heading-default-l"
							onBackground="neutral-weak"
							wrap="balance"
							style={{ maxWidth: '800px' }}>
							{blog.description}
						</Heading>
					)}
				</Flex>
				<BlogShowcase posts={sortedBlogs} columns="3" thumbnail/>
				{newsletter.display && (
					<Flex maxWidth="m" style={{ margin: '0 auto', width: '100%' }}>
						<Mailchimp newsletter={newsletter} />
					</Flex>
				)}
			</Flex>
    );
}