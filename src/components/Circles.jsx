import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import Circle from "./Circle"

const StyledCircles = styled.div` 
  background-color: ${colors.background};
  width: 100vw;
  margin: 0px -16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  img {
    margin-bottom: 0px;
  }
`

const Circles = ({ Item }) => (
  <StyledCircles>
    <Circle></Circle>
    <Circle></Circle>
    <Circle></Circle>
  </StyledCircles>
)

export default Circles
