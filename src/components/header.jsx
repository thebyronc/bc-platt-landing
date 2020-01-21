import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { colors } from "../style-utilities/variables"

import Nav from "./navigation/nav"
import Search from "./Search"

const StyledHeader = styled.header`
  background: ${colors.primaryColor};
  width: 100%;
`


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      swapi {
        allVehicles {
          name
        }
      }
    }
  `)
  return(
    <StyledHeader>
      <Nav></Nav>
      <Search data={data.swapi.allVehicles}></Search>
    </StyledHeader>
  )
}
export default Header
