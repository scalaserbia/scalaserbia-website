import React, { PropTypes } from "react"
import { Link } from "react-router"

import styles from "./index.css"
import SocialMediaHeader from "../SocialMediaHeader"
import scalaSerbiaLogo from "../images/logo.jpeg"

const Header = (props) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to="/"
        > 
          <img src={ scalaSerbiaLogo } cleanup />
        </Link>
        <Link
          className={ styles.link }
          to="/events/"
        >
          { "Događaji" }
        </Link>
        <Link
          className={ styles.link }
          to="/contact"
        >
          { "Kontakt" }
        </Link>
      </div>
      <SocialMediaHeader { ...props } />
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
