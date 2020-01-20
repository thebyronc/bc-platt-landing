import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, breakpoints } from "../../style-utilities/variables"

import GridItem from "./GridItem"
import PlattPlusImg from "../../images/img/platt-plus.png"

const StyledGridLearnMore = styled(GridItem)`
  /* justify-content: center; */
  img {
    width: 100%;
    margin: auto auto;
  }
`

const StyledTitle = styled.div`
  h3 {
    font-size: 1.2rem;
    margin: 0px;
    display: block;
    text-align: center;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: 0px;
    margin: 0px;
    display: block;
    text-align: center;
  }
  span {
    color: ${colors.linkColor};
  }
`

const StyledButton = styled.button`
  font-size: .9rem;
  background-color: ${colors.background};
  color: ${colors.text};
  border: none;
  border-radius: 32px;
  margin: 16px auto;
  padding: 8px 64px;
`

const GridLearnMore = ({className}) => (
  <StyledGridLearnMore className={className}>
    <img src={PlattPlusImg} alt="Computers" />
    <StyledTitle>
      <h3>Get Started Today</h3>
      <p>Become a <span>Platt Plus</span> Member.</p>
    </StyledTitle>
    <StyledButton>Learn More</StyledButton>
  </StyledGridLearnMore>
)

export default GridLearnMore
