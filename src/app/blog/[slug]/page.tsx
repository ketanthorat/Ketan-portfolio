import { notFound } from 'next/navigation'
import { CustomMDX } from '@/components/mdx'
import { getPosts } from '@/app/utils/utils'
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import { baseURL } from '@/app/resources';
import { person } from '@/app/resources/content';
import { formatDate } from '@/app/utils/formatDate';
import ScrollToHash from '@/components/ScrollToHash';
import { RelatedPostCard } from '@/components/blog/RelatedPostCard';
import styles from './blog-post.module.scss';

interface BlogParams {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = getPosts(['src', 'app', 'blog', 'posts']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params: { slug } }: BlogParams) {
	let post = getPosts(['src', 'app', 'blog', 'posts']).find((post) => post.slug === slug)
	
	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		images,
		image,
		team,
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
			twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Blog({ params }: BlogParams) {
	let post = getPosts(['src', 'app', 'blog', 'posts']).find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const avatars = post.metadata.team?.map((person) => ({
        src: person.avatar,
    })) || [];

	return (
		<div style={{ 
			width: '100vw',
			marginLeft: 'calc(-50vw + 50%)',
			marginRight: 'calc(-50vw + 50%)',
			maxWidth: '100vw',
			overflow: 'hidden'
		}}>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://${baseURL}${post.metadata.image}`
							: `https://${baseURL}/og?title=${post.metadata.title}`,
							url: `https://${baseURL}/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>
			
			{/* Hero Section with Image */}
			<Flex
				fillWidth
				direction="column"
				style={{
					position: 'relative',
					background: 'var(--neutral-background-weak)',
					borderBottom: '1px solid var(--neutral-border-medium)'
				}}>
				{post.metadata.image && (
					<div style={{
						position: 'relative',
						width: '100%',
						height: '60vh',
						minHeight: '400px',
						maxHeight: '600px',
						overflow: 'hidden'
					}}>
						<SmartImage
							src={post.metadata.image}
							alt={post.metadata.title}
							aspectRatio="21 / 9"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover'
							}}
						/>
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)'
						}}></div>
					</div>
				)}
				
				{/* Header Content Overlay */}
				<Flex
					fillWidth
					direction="column"
					alignItems="center"
					style={{
						position: post.metadata.image ? 'absolute' : 'relative',
						bottom: post.metadata.image ? '0' : 'auto',
						left: 0,
						right: 0,
						padding: 'var(--static-space-64) var(--static-space-24)',
						background: post.metadata.image ? 'transparent' : 'var(--neutral-background-weak)'
					}}>
					<Flex
						fillWidth
						maxWidth="l"
						direction="column"
						gap="24"
						alignItems="center"
						textAlign="center">
						<Button
							href="/blog"
							weight="default"
							variant="secondary"
							size="s"
							prefixIcon="chevronLeft"
							style={{
								alignSelf: 'flex-start',
								background: post.metadata.image ? 'rgba(255,255,255,0.1)' : undefined,
								backdropFilter: post.metadata.image ? 'blur(10px)' : undefined,
								border: post.metadata.image ? '1px solid rgba(255,255,255,0.2)' : undefined,
								color: post.metadata.image ? 'white' : undefined
							}}>
							Back to Posts
						</Button>
						
						{post.metadata.tag && (
							<Flex
								gap="8"
								paddingX="16"
								paddingY="8"
								radius="m"
								style={{
									background: 'var(--brand-background-strong)',
									color: 'var(--brand-on-solid)',
									fontSize: 'var(--font-size-body-s)',
									fontWeight: 'var(--font-weight-medium)'
								}}>
								{post.metadata.tag}
							</Flex>
						)}
						
						<Heading
							variant="display-strong-xl"
							style={{
								color: post.metadata.image ? 'white' : undefined,
								textShadow: post.metadata.image ? '0 2px 20px rgba(0,0,0,0.5)' : undefined
							}}>
							{post.metadata.title}
						</Heading>
						
						{post.metadata.summary && (
							<Text
								variant="heading-default-l"
								style={{
									color: post.metadata.image ? 'rgba(255,255,255,0.9)' : 'var(--neutral-on-background-medium)',
									maxWidth: '800px',
									textShadow: post.metadata.image ? '0 1px 10px rgba(0,0,0,0.5)' : undefined
								}}>
								{post.metadata.summary}
							</Text>
						)}
						
						<Flex
							gap="16"
							alignItems="center"
							style={{
								color: post.metadata.image ? 'rgba(255,255,255,0.8)' : undefined
							}}>
							{avatars.length > 0 && (
								<AvatarGroup
									size="m"
									avatars={avatars}
								/>
							)}
							<Flex gap="8" alignItems="center">
								<Text
									variant="body-default-m"
									style={{
										color: post.metadata.image ? 'rgba(255,255,255,0.9)' : 'var(--neutral-on-background-weak)'
									}}>
									{formatDate(post.metadata.publishedAt)}
								</Text>
								{post.metadata.readTime && (
									<>
										<Text variant="body-default-m" style={{ color: post.metadata.image ? 'rgba(255,255,255,0.6)' : undefined }}>•</Text>
										<Text
											variant="body-default-m"
											style={{
												color: post.metadata.image ? 'rgba(255,255,255,0.9)' : 'var(--neutral-on-background-weak)'
											}}>
											{post.metadata.readTime} min read
										</Text>
									</>
								)}
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>

			{/* Article Content */}
			<Flex
				fillWidth
				direction="column"
				alignItems="center"
				paddingY="xl"
				paddingX="l">
				<Flex
					as="article"
					maxWidth="m"
					fillWidth
					direction="column"
					gap="24"
					className={styles.articleContent}>
					<CustomMDX source={post.content} />
				</Flex>
			</Flex>

			{/* Author Section */}
			{post.metadata.team && post.metadata.team.length > 0 && (
				<Flex
					fillWidth
					direction="column"
					alignItems="center"
					paddingY="xl"
					paddingX="l"
					className={styles.authorSection}>
					<Flex
						maxWidth="m"
						fillWidth
						direction="column"
						gap="24">
						<Heading variant="heading-strong-l">Written by</Heading>
						<Flex gap="24" wrap>
							{post.metadata.team.map((author: any, index: number) => (
								<div key={index} className={styles.authorCard}>
									{author.avatar && (
										<img
											src={author.avatar}
											alt={author.name}
											className={styles.authorAvatar}
										/>
									)}
									<Flex direction="column" gap="4">
										<Text variant="heading-strong-m">{author.name}</Text>
										{author.role && (
											<Text variant="body-default-s" onBackground="neutral-weak">
												{author.role}
											</Text>
										)}
									</Flex>
								</div>
							))}
						</Flex>
					</Flex>
				</Flex>
			)}

			{/* Related Posts */}
			<Flex
				fillWidth
				direction="column"
				alignItems="center"
				paddingY="xl"
				paddingX="l"
				style={{
					background: 'var(--neutral-background-weak)',
					borderTop: '1px solid var(--neutral-border-medium)'
				}}>
				<Flex
					maxWidth="xl"
					fillWidth
					direction="column"
					gap="32">
					<Flex justifyContent="space-between" alignItems="center">
						<Heading variant="heading-strong-l">Continue Reading</Heading>
						<Button
							href="/blog"
							variant="tertiary"
							size="s"
							suffixIcon="chevronRight">
							View all posts
						</Button>
					</Flex>
					<Flex gap="24" wrap style={{ justifyContent: 'center' }}>
						{getPosts(['src', 'app', 'blog', 'posts'])
							.filter(p => p.slug !== post.slug)
							.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
							.slice(0, 3)
							.map((relatedPost) => (
								<RelatedPostCard key={relatedPost.slug} post={relatedPost} />
							))}
					</Flex>
				</Flex>
			</Flex>

			<ScrollToHash />
		</div>
	)
}