import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

const StyledCircle = styled.div` 
  background-color: ${colors.white};
  width: 75px;
  height: 75px;
  img {
    margin-bottom: 0px;
  }
`

const Circle = ({ Item }) => (
  <StyledCircle>
    circle
  </StyledCircle>
)

export default Circle
