import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'
import url from 'url'
import Bio from '../components/Bio'
import Share from '../components/Share'
import SEO from '../components/SEO'
import { rhythm, scale } from '../utils/typography'
import { siteMetadata } from '../../gatsby-config'
import _ from 'lodash'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next, slug } = this.props.pathContext
    const { frontmatter } = post
    const postUrl = url.resolve(siteMetadata.siteUrl, slug)
    const siteUrl = siteMetadata.siteUrl

    return (
      <div>
        <div id="fb-root" />
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js" />
        </Helmet>
        <SEO
          postNode={post}
          siteUrl={siteUrl}
          postUrl={postUrl}
          slug={slug}
          postSEO
        />
        <h1>{post.frontmatter.title}</h1>
        <Tags>
          {frontmatter.tags.map((t, idx) => (
            <li key={t}>
              <Link key={t} to={`/tags/${_.kebabCase(t)}`}>
                {t}
              </Link>
            </li>
          ))}
        </Tags>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <Share title={frontmatter.title} link={postUrl} />

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`

const Tags = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 -5px;
  li {
    margin: 0 5px;
  }
  a {
    display: block;
    padding: 0 5px;
    box-shadow: none;
    font-size: 12px;
    background: #007acc;
    color: #fff;
  }
`
