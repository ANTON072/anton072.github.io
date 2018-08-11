import React from 'react'
import Helmet from 'react-helmet'
import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'
import styled from 'styled-components'

export default function Share({ link, title }) {
  return (
    <Root>
      <ul>
        <Helmet>
          <script
            type="text/javascript"
            src="//b.st-hatena.com/js/bookmark_button.js"
            charset="utf-8"
            async="async"
          />
        </Helmet>
        <li>
          <FacebookShareButton url={link}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton title={title} via="anton072" url={link}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
        <li>
          <a
            href="http://b.hatena.ne.jp/entry/"
            className="hatena-bookmark-button"
            data-hatena-bookmark-layout="vertical-normal"
            data-hatena-bookmark-lang="ja"
            title="このエントリーをはてなブックマークに追加"
          >
            <img
              src="//b.st-hatena.com/images/entry-button/button-only@2x.png"
              alt="このエントリーをはてなブックマークに追加"
              width="20"
              height="20"
              style={{ border: 'none' }}
            />
          </a>
        </li>
      </ul>
    </Root>
  )
}

const Root = styled.div`
  margin: 40px 0;
  ul {
    list-style: none;
    display: flex;
    margin: 0 -10px;
    justify-content: flex-end;
  }
  li {
    margin: 0 10px;
    cursor: pointer;
  }
`
