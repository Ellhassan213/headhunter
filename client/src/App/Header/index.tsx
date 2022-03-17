import React from 'react'
import { StyledHeader, StyledHeaderLink, StyledHeaderIcon } from './styles'
import { GiDiamondsSmile } from 'react-icons/gi'

const Header = () => {
  return (
    <StyledHeader>
        <StyledHeaderIcon to="/"> <GiDiamondsSmile /> </StyledHeaderIcon>
        <StyledHeaderLink to="/venues"> <h3>Venues</h3> </StyledHeaderLink>
        <StyledHeaderLink to="/artists"> <h3>Artists</h3> </StyledHeaderLink>
    </StyledHeader>
  )
}

export default Header
