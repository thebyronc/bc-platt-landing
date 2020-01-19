import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Categories from "../components/Categories"
import Circles from "../components/Circles"
import Grids from "../components/grid/Grids"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Categories></Categories>
    <Circles></Circles>
    <Grids></Grids>
  </Layout>
)

export default IndexPage
