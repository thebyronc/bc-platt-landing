import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../style-utilities/variables"

import GridItem from "./GridItem"
import Recent11Img from "../../images/recent/11.png"
import Recent22Img from "../../images/recent/22.png"

const StyledGridRecentlyViewed = styled(GridItem)`
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  display: flex;
  flex-direction: row;
  img {
    margin-bottom: 0px;
    width: 33%;
  }
`

const GridRecentlyViewed = ({className}) => (
  <StyledGridRecentlyViewed className={className}>
    <StyledTitle>
      <p>Recently Viewed</p>
      <StyledLink to="/">View All</StyledLink>
    </StyledTitle>
    <StyledImgContainer>
      <img src={Recent11Img} alt="Red Machine" />
      <img src={Recent22Img} alt="Silver Machine" />
      <img src={Recent22Img} alt="Silver Machine" />
    </StyledImgContainer>
  </StyledGridRecentlyViewed>
)

export default GridRecentlyViewed
