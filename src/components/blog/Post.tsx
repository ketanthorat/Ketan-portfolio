"use client";

import { Flex, Heading, SmartImage, SmartLink, Tag, Text, RevealFx } from '@/once-ui/components';
import styles from './Posts.module.scss';
import { formatDate } from '@/app/utils/formatDate';

interface PostProps {
    post: any;
    thumbnail: boolean;
    featured?: boolean;
    index?: number;
}

export default function Post({ post, thumbnail, featured = false, index = 0 }: PostProps) {
    return (
        <RevealFx translateY="20" delay={index * 0.1}>
            <SmartLink
                className={`${styles.postCard} ${featured ? styles.featured : ''}`}
                style={{
                    textDecoration: 'none',
                    margin: '0',
                    height: '100%',
                }}
                key={post.slug}
                href={`/blog/${post.slug}`}>
                <Flex
                    position="relative"
                    direction="column"
                    fillWidth
                    height="100%"
                    className={styles.cardContent}>
                    {post.metadata.image && thumbnail && (
                        <div className={styles.imageWrapper}>
                            <SmartImage
                                priority={featured}
                                sizes={featured ? "1200px" : "640px"}
                                className={styles.postImage}
                                radius="m"
                                src={post.metadata.image}
                                alt={'Thumbnail of ' + post.metadata.title}
                                aspectRatio={featured ? "21 / 9" : "16 / 9"}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    )}
                    <Flex
                        position="relative"
                        fillWidth
                        gap="12"
                        padding="24"
                        direction="column"
                        justifyContent="space-between"
                        flex={1}>
                        <Flex direction="column" gap="12">
                            {post.metadata.tag && (
                                <Tag
                                    size="s"
                                    label={post.metadata.tag}
                                    variant="brand" />
                            )}
                            <Heading
                                as="h2"
                                variant={featured ? "heading-strong-xl" : "heading-strong-l"}
                                wrap="balance">
                                {post.metadata.title}
                            </Heading>
                            {post.metadata.summary && (
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-medium"
                                    className={styles.summary}>
                                    {post.metadata.summary}
                                </Text>
                            )}
                        </Flex>
                        <Flex alignItems="center" gap="8">
                            <Text
                                variant="label-default-s"
                                onBackground="neutral-weak">
                                {formatDate(post.metadata.publishedAt, false)}
                            </Text>
                            {post.metadata.readTime && (
                                <>
                                    <Text variant="label-default-s" onBackground="neutral-weak">•</Text>
                                    <Text variant="label-default-s" onBackground="neutral-weak">
                                        {post.metadata.readTime} min read
                                    </Text>
                                </>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </SmartLink>
        </RevealFx>
    );
}