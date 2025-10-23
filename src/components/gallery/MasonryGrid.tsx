"use client";

import Masonry from 'react-masonry-css';
import { SmartImage, Flex, Heading, Text, RevealFx } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from '@/app/resources/content';

export default function MasonryGrid() {
    const breakpointColumnsObj = {
        default: 4,
        1440: 3,
        1024: 2,
        560: 1
    };

    // Show empty state if no images
    if (!gallery.images || gallery.images.length === 0) {
        return (
            <RevealFx translateY="20">
                <Flex
                    fillWidth
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    gap="24"
                    paddingY="xl"
                    className={styles.emptyState}>
                    <div style={{ fontSize: '5rem' }}>📸</div>
                    <Heading variant="display-strong-l" style={{ textAlign: 'center' }}>
                        {gallery.title}
                    </Heading>
                    <Text 
                        variant="body-default-l" 
                        onBackground="neutral-weak"
                        style={{ textAlign: 'center', maxWidth: '600px' }}>
                        {gallery.description}
                    </Text>
                    <Flex
                        direction="column"
                        gap="16"
                        padding="32"
                        radius="l"
                        style={{
                            background: 'var(--neutral-background-weak)',
                            border: '1px solid var(--neutral-border-medium)',
                            maxWidth: '500px',
                            textAlign: 'center'
                        }}>
                        <Text variant="heading-strong-m">Coming Soon</Text>
                        <Text variant="body-default-m" onBackground="neutral-medium">
                            Gallery images will be added soon. Check back later to see my photography and visual work!
                        </Text>
                    </Flex>
                </Flex>
            </RevealFx>
        );
    }

    return (
        <>
            {/* Gallery Header */}
            <Flex
                fillWidth
                direction="column"
                alignItems="center"
                gap="16"
                marginBottom="xl"
                style={{ textAlign: 'center' }}>
                <RevealFx translateY="4">
                    <Heading variant="display-strong-xl">
                        {gallery.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="4" delay={0.1}>
                    <Text 
                        variant="heading-default-l" 
                        onBackground="neutral-weak"
                        style={{ maxWidth: '700px' }}>
                        {gallery.description}
                    </Text>
                </RevealFx>
                <RevealFx translateY="4" delay={0.2}>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                        {gallery.images.length} {gallery.images.length === 1 ? 'image' : 'images'}
                    </Text>
                </RevealFx>
            </Flex>

            {/* Masonry Grid */}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}>
                {gallery.images.map((image: any, index: number) => (
                    <RevealFx key={index} translateY="20" delay={index * 0.05}>
                        <div className={styles.gridItemWrapper}>
                            <SmartImage
                                priority={index < 10}
                                sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                                radius="m"
                                src={image.src}
                                alt={image.alt}
                                className={styles.gridItem}
                            />
                            {image.alt && (
                                <div className={styles.imageCaption}>
                                    <Text variant="body-default-s" onBackground="neutral-weak">
                                        {image.alt}
                                    </Text>
                                </div>
                            )}
                        </div>
                    </RevealFx>
                ))}
            </Masonry>
        </>
    );
}