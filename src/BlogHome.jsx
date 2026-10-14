import { Link } from 'react-router-dom';
import { posts } from './posts.js';

// Persistent home button. Render once in App.jsx, inside <BrowserRouter> and above <Routes>.
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="home-link" aria-label="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
          </svg>
          studev.org
        </Link>

        <nav className = "site-nav">
            <a
                href = "/Resume.pdf"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume
            </a>
        </nav>
      </div>
    </header>
  );
}

export default function BlogHome() {
  if (posts.length === 0) {
    return <p className="blog-empty">No posts yet.</p>;
  }

  const [featured, ...rest] = posts;

  return (
    <div className="blog-wrap">
      {/* Featured post: centered showcase */}
      <Link to={`/${featured.slug}`} className="featured">
        <article>
          {featured.coverImage && (
            <div className="featured-img">
              <img src={featured.coverImage} alt={featured.title} />
            </div>
          )}
          <h1 className="featured-title">{featured.title}</h1>
          <p className="featured-excerpt">{featured.excerpt}</p>
          <div className="meta">
            <time>{new Date(featured.date).toLocaleDateString()}</time>
            <span>·</span>
            <span>{featured.author?.name}</span>
          </div>
          {featured.tags && (
            <div className="tags">
              {featured.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </article>
      </Link>

      {/* Recent posts: full-width banner thumbnail, title underneath */}
      {rest.length > 0 && (
        <section>
          <h2 className="recent-heading">Recent Posts</h2>
          <div className="recent-list">
            {rest.map(post => (
              <Link key={post.slug} to={`/${post.slug}`} className="post-row">
                <div className="post-thumb">
                  {post.coverImage && <img src={post.coverImage} alt="" loading="lazy" />}
                </div>
                <h3 className="post-title">{post.title}</h3>
                <div className="meta meta-small">
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  {post.author?.name && <span>· {post.author.name}</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}