import React from 'react'
import Helmet from 'react-helmet'
import config from '../../gatsby-config'
import url from 'url'

export default function SEO({ postNode, postUrl, postSEO }) {
  let title
  let description
  let image
  let postURL
  if (postSEO) {
    const postMeta = postNode.frontmatter
    title = postMeta.title
    description = postMeta.description ? postMeta.description : postNode.excerpt
    postURL = postUrl
  } else {
    title = config.siteMetadata.title
    description = config.siteMetadata.descrioption
  }

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      <meta property="fb:app_id" content="504527799969470" />
      <meta property="og:type" content="article" />
      {/* Twitter Card tags */}
      <meta name="twitter:creator" content="@ANTON072" />
    </Helmet>
  )
}
