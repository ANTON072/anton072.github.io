import React from 'react'
import Link from 'gatsby-link'

export default function PostListing({ title, postEdges }) {
  const posts = postEdges.map(post => {
    const { node } = post
    return {
      title: node.frontmatter.title,
      excerpt: node.excerpt,
      path: `/entry/${node.frontmatter.date}/`,
    }
  })
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <Link to={post.path}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
