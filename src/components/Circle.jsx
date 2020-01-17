import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

const StyledContainer = styled.div`
  p {
    margin: 8px 0px 0px;
    text-align: center;
  }
`

const StyledCircle = styled.div` 
  background-color: ${colors.white};
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px 0px;
  img {
    margin-bottom: 0px;
  }
`

const Circle = ({ icon, text }) => (
  <StyledContainer>
    <StyledCircle>
      <img src={icon} />
    </StyledCircle>
    <p>{text}</p>
  </StyledContainer>
)

export default Circle
