import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Categories from "../components/Categories"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Categories></Categories>
  </Layout>
)

export default IndexPage
