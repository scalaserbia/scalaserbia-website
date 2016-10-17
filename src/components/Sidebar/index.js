import React, { PropTypes } from "react"

import enhanceCollection from "phenomic/lib/enhance-collection"

import styles from "./index.css"
import PagesList from "../../components/PagesList"

const numberOfLatestPosts = 6

const Sidebar = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, numberOfLatestPosts)

  return (
    <div className={ styles.sidebar }>
      <h2>{ "Latest Posts" }</h2>
        <PagesList pages={ latestPosts } />
    </div>
  )
}

Sidebar.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Sidebar
