const modules = import.meta.glob('../public/posts/*.md', { eager: true });

export const posts = Object.entries(modules)
    .map(([path, mod]) => ({
        slug: path.split('/').pop().replace('.md', ''),
        title: mod.attributes.title,
        excerpt: mod.attributes.excerpt,
        coverImage: mod.attributes.coverImage,
        date: mod.attributes.date,
        author: mod.attributes.author,
        ogImage: mod.attributes.ogImage,
        Component: mod.default,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));