import { useParams } from 'react-router-dom';
import { posts } from './posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post not found!</p>;

  const PostComponent = post.Component;
  return (
    <div className="blog-wrap">
      <article className="blog-post">
        <div className="post-cover">
          <img src = {post.coverImage}
          alt = {`Cover image for ${post.title}`}
          fetchPriority="high"
          />
        </div>
        <div className="post-header">
          <h1>{post.title}</h1>
          <time>{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <PostComponent />
      </article>
    </div>
  )

};