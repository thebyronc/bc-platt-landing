import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, breakpoints } from "../../style-utilities/variables"

import GridItem from "./GridItem"
import AppGetImg from "../../images/panel/app-get-banner.png"

const StyledGridAppStore = styled(GridItem)`
  padding: 0px;
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  p {
    font-weight: 700;
    margin: 0px;
    display: block;
  }
`

const StyledLink = styled(Link)`
  font-size: .8rem;
  font-weight: 700;
  color: ${colors.linkColor};
`

const StyledImgContainer = styled.div`
  width: 100%;
  height: 130px;
  background-image: url(${AppGetImg});
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
`

const GridAppStore = ({className}) => (
  <StyledGridAppStore className={className}>
    <StyledImgContainer>
    </StyledImgContainer>
    <StyledTitle>
      <p>Shop better, download the Platt App today</p>
    </StyledTitle>
  </StyledGridAppStore>
)

export default GridAppStore
