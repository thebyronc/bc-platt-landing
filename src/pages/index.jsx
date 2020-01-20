import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Categories from "../components/Categories"
import Circles from "../components/Circles"
import Products from "../components/Products"
import Grids from "../components/grid/Grids"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Categories></Categories>
    <Circles></Circles>
    <Products></Products>
    <Grids></Grids>
  </Layout>
)

// export const query = graphql``
// {
//   dogceo {
//     allSpecies {
//       name
//     }
//   }
// }

export default IndexPage
