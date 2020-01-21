import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"
import Img from "gatsby-image"

const StyledProduct = styled.div` 
  display: none;
  background-color: ${colors.white};
  width: 109px;
  margin: 16px 0px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px 0px;

  img {
    width: 100%;
    margin-bottom: 5px;
  }
  @media (min-width: ${breakpoints.mobile}) {
    display: block;
  }
`

const StyledTitle = styled.p`
  padding: 8px 0px;
  text-align: center;
  margin-bottom: 0px;
  font-size: .9rem;
  font-weight: 700;
`

const Product = ({children, image, product}) => (
  <StyledProduct>
    <img src={image} />
    <StyledTitle>
      {product}
    </StyledTitle>
  </StyledProduct>
)

export default Product
