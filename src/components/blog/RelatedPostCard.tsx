"use client";

import { Flex, Heading, SmartImage, Text } from '@/once-ui/components';
import { formatDate } from '@/app/utils/formatDate';

interface RelatedPostCardProps {
    post: any;
}

export function RelatedPostCard({ post }: RelatedPostCardProps) {
    return (
        <a
            href={`/blog/${post.slug}`}
            style={{
                textDecoration: 'none',
                flex: '1',
                minWidth: '280px',
                maxWidth: '360px'
            }}>
            <Flex
                direction="column"
                gap="12"
                padding="20"
                radius="l"
                style={{
                    background: 'var(--neutral-background-medium)',
                    border: '1px solid var(--neutral-border-medium)',
                    height: '100%',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = 'var(--brand-border-medium)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--neutral-border-medium)';
                }}>
                {post.metadata.image && (
                    <div style={{
                        width: '100%',
                        height: '180px',
                        borderRadius: 'var(--radius-m)',
                        overflow: 'hidden',
                        marginBottom: 'var(--static-space-8)'
                    }}>
                        <SmartImage
                            src={post.metadata.image}
                            alt={post.metadata.title}
                            aspectRatio="16 / 9"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                )}
                {post.metadata.tag && (
                    <Text
                        variant="label-default-s"
                        style={{
                            color: 'var(--brand-on-background-strong)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                        {post.metadata.tag}
                    </Text>
                )}
                <Heading variant="heading-strong-m" wrap="balance">
                    {post.metadata.title}
                </Heading>
                {post.metadata.summary && (
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-medium"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                        {post.metadata.summary}
                    </Text>
                )}
                <Text variant="label-default-s" onBackground="neutral-weak">
                    {formatDate(post.metadata.publishedAt)}
                </Text>
            </Flex>
        </a>
    );
}
