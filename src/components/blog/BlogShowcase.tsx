"use client";

import { useState } from 'react';
import { Flex, Heading, Text, RevealFx } from '@/once-ui/components';
import Post from './Post';
import styles from './Posts.module.scss';

interface BlogShowcaseProps {
    posts: any[];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
}

export function BlogShowcase({
    posts,
    columns = '3',
    thumbnail = true
}: BlogShowcaseProps) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Get unique categories
    const categories = ['all', ...new Set(posts.map(post => post.metadata.tag).filter(Boolean))];

    const filteredBlogs = selectedCategory === 'all' 
        ? posts 
        : posts.filter(post => post.metadata.tag === selectedCategory);

    const featuredPost = filteredBlogs[0];
    const regularPosts = filteredBlogs.slice(1);

    return (
        <div className={styles.postsContainer}>
            {/* Category Filter */}
            {categories.length > 1 && (
                <RevealFx translateY="4" delay={0.1}>
                    <Flex gap="s" wrap justifyContent="center" className={styles.categoryFilter}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`${styles.categoryButton} ${selectedCategory === cat ? styles.active : ''}`}
                            >
                                {cat === 'all' ? 'All Posts' : cat}
                            </button>
                        ))}
                    </Flex>
                </RevealFx>
            )}

            {filteredBlogs.length > 0 ? (
                <>
                    {/* Featured Post */}
                    {featuredPost && (
                        <div className={styles.featuredSection}>
                            <Post
                                post={featuredPost}
                                thumbnail={thumbnail}
                                featured={true}
                                index={0}
                            />
                        </div>
                    )}

                    {/* Regular Posts Grid */}
                    {regularPosts.length > 0 && (
                        <div className={`${styles.postsGrid} ${styles[`columns-${columns}`]}`}>
                            {regularPosts.map((post, index) => (
                                <Post
                                    key={post.slug}
                                    post={post}
                                    thumbnail={thumbnail}
                                    index={index + 1}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <RevealFx translateY="20">
                    <div className={styles.emptyState}>
                        <Flex 
                            fillWidth 
                            justifyContent="center" 
                            alignItems="center"
                            direction="column"
                            gap="16">
                            <Text style={{ fontSize: '4rem' }}>📝</Text>
                            <Heading variant="heading-strong-l">No posts found</Heading>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                                Try selecting a different category
                            </Text>
                        </Flex>
                    </div>
                </RevealFx>
            )}
        </div>
    );
}
