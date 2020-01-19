import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../../style-utilities/variables"

import GridItem from "./GridItem"
import DealImg from "../../images/panel/deal.png"
import SuperToolImg from "../../images/img/super-tool-day.png"
import LocationBImg from "../../images/img/ic_location_b.png"
import HelpCenterImg from "../../images/img/ic_helpcenter.png"
import PlattUImg from "../../images/img/ic_platt-u.png"

const StyledGrids = styled.div` 
  width: 100%;
  margin: 0px 0px;
  padding: 16px 0px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 180px 180px 180px;
  grid-gap: 16px;
  grid-template-areas: 
    'itemFull1 itemFull1'
    'itemFull2 itemFull2'
    'item1A item1B'
    'item2A item2B';
`

const StyledGridDeal = styled(GridItem)`
  background-image: url(${DealImg});
  background-size: cover;
  background-position: center;
  grid-area: itemFull1;
`

const StyledGridLearnMore = styled(GridItem)`
  grid-area: itemFull2;
`

const StyledGridItem = styled(GridItem)`
  &:nth-child(3) {
    grid-area: item1A;
  }
  &:nth-child(4) {
    grid-area: item1B;
  }
  &:nth-child(5) {
    grid-area: item2A;
  }
  &:nth-child(6) {
    grid-area: item2B;
  }
`

const Grids = () => (
  <StyledGrids>
    <StyledGridDeal>
    </StyledGridDeal>
    <StyledGridLearnMore>
      <p>Learn More</p>
    </StyledGridLearnMore>
    <StyledGridItem>
      <img src={SuperToolImg} alt="Super Tool Day" />
      <p>Super Tool Day &<br/> Dynamic Data Day</p>
    </StyledGridItem>
    <StyledGridItem>
      <img src={LocationBImg} alt="Branch Locations" />
      <p>Branch Locations</p>
    </StyledGridItem>
    <StyledGridItem>
      <img src={HelpCenterImg} alt="Branch Locations" />
      <p>Help Center</p>
    </StyledGridItem>
    <StyledGridItem>
      <img src={PlattUImg} alt="Branch Locations" />
      <p>Platt University</p>
    </StyledGridItem>
  </StyledGrids>
)

export default Grids
