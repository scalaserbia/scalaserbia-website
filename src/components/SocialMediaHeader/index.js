import React, { PropTypes } from "react"

import styles from "./index.css"
import Svg from "react-svg-inline"
import twitterSvg from "../icons/twitter_black.svg"
import gitHubSvg from "../icons/github_black.svg"
import facebookSvg from "../icons/facebook_black.svg"
import slackSvg from "../icons/slack_black.svg"
import youTubeSvg from "../icons/youtube_black.svg"
import linkedInSvg from "../icons/linkedin_black.svg"

const SocialMediaHeader = (props, { metadata: { pkg } }) => (
  <div className={ styles.navPart2 }>
    { pkg.twitter &&
      <a
        href={ `https://twitter.com/${pkg.twitter}` }
        className={ styles.link }
      >
        <Svg svg={ twitterSvg } cleanup />
      </a>
    }
    { pkg.repository &&
      <a
        href={ pkg.repository }
        className={ styles.link }
      >
        <Svg svg={ gitHubSvg } cleanup />
      </a>
    }
      <a
        href={ pkg.facebook }
        className={ styles.link }
      >
        <Svg svg={ facebookSvg } cleanup />
      </a>
      <a
        href={ pkg.slack }
        className={ styles.link }
      >
        <Svg svg={ slackSvg } cleanup />
      </a>
      <a
        href={ pkg.youtube }
        className={ styles.link }
      >
        <Svg svg={ youTubeSvg } cleanup />
      </a>
      <a
        href={ pkg.linkedin }
        className={ styles.link }
      >
        <Svg svg={ linkedInSvg } cleanup />
      </a>
  </div>
)

SocialMediaHeader.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default SocialMediaHeader
