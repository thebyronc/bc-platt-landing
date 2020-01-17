import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Categories from "../components/Categories"
import Circles from "../components/Circles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Categories></Categories>
    <Circles></Circles>
  </Layout>
)

export default IndexPage
