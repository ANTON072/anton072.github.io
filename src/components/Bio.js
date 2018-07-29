import React from 'react'
import styled from 'styled-components'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaRssSquare from 'react-icons/lib/fa/rss-square'
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/anton072"
          alt={`Katsushi Ougi`}
        />
        <div>
          <div>
            Written by <strong>Katsushi Ougi</strong>.
          </div>
          <Icons>
            <li>
              <a href="mailto:bdbkx286@gmail.com">
                <FaEnvelopeSquare size={25} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ANTON072" target="_blank">
                <FaGithubSquare size={25} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ANTON072" target="_blank">
                <FaTwitterSquare size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ANTON072" target="_blank">
                <FaFacebookSquare size={25} />
              </a>
            </li>
            <li>
              <a href="/rss.xml" target="_blank">
                <FaRssSquare size={25} />
              </a>
            </li>
          </Icons>
        </div>
      </div>
    )
  }
}

export default Bio

const Icons = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 -5px;
  li {
    margin: 0 5px;
  }
  a {
    box-shadow: none;
    &:hover {
      opacity: 0.6;
    }
  }
`

const Avatar = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: ${rhythm(1)};
`
