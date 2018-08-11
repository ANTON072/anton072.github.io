import React from 'react'
import Helmet from 'react-helmet'
import config from '../../gatsby-config'
import url from 'url'
import path from 'path'

export default function SEO({ postNode, postUrl, postSEO, siteUrl, slug }) {
  let title
  let description
  let image
  let postURL
  if (postSEO) {
    const postMeta = postNode.frontmatter
    title = postMeta.title
    description = postMeta.description ? postMeta.description : postNode.excerpt
    postURL = postUrl
    const filePath = postNode.id.split(' ')[0]
    const basename = path.basename(filePath, '.md')
    image = url.resolve(siteUrl, `/og/${basename}.png`)
  } else {
    title = config.siteMetadata.title
    description = config.siteMetadata.descrioption
  }

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      <meta property="fb:app_id" content="504527799969470" />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ANTON072" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
