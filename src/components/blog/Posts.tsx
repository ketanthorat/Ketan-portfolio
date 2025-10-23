import Post from './Post';
import styles from './Posts.module.scss';

interface PostsProps {
    posts: any[];
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
}

export function Posts({
    posts = [],
    range,
    columns = '3',
    thumbnail = true
}: PostsProps) {
    if (!posts || posts.length === 0) {
        return null;
    }

    const sortedBlogs = [...posts].sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length 
          )
        : sortedBlogs;

    const featuredPost = displayedBlogs[0];
    const regularPosts = displayedBlogs.slice(1);

    return (
        <div className={styles.postsContainer}>
            {displayedBlogs.length > 0 ? (
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
            ) : null}
        </div>
    );
}