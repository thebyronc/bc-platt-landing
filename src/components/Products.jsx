import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../style-utilities/variables"

import Product from "./Product"
import DataImg from "../images/img/datacomm.png"
import HVACImg from "../images/img/hvac.png"
import IndusImg from "../images/img/industrial.png"
import LightImg from "../images/img/lighting.png"
import EnergyImg from "../images/img/energy.png"
import UtilityImg from "../images/img/utility.png"

const StyledProducts = styled.div` 
  display: none;
  background-color: ${colors.background};
  width: 100%;
  margin: 16px 0px;
  img {
    margin-bottom: 0px;
  }
  @media (min-width: ${breakpoints.mobile}) {
    display: block;
  }
`
const StyledTitle = styled.div`
  text-align: center;
`
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Products = () => (
  <StyledProducts>
    <StyledTitle>
      <h3>Product Markets</h3>
    </StyledTitle>
    <StyledWrapper>
      <Product 
        image={DataImg} 
        product={'DataComm'}>
      </Product>
      <Product 
        image={HVACImg}
        product={'HVAC'}>
      </Product>
      <Product 
        image={IndusImg}
        product={'Industrial'}>
      </Product>
      <Product 
        image={LightImg}
        product={'Lightning'}>
      </Product>
      <Product 
        image={EnergyImg}
        product={'Energy Effeciency'}>
      </Product>
      <Product 
        image={UtilityImg}
        product={'Utility'}>
      </Product>
    </StyledWrapper>
  </StyledProducts>
)

export default Products
