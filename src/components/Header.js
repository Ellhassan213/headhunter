import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/" className="header-link"> <i className="ri-emotion-happy-fill"></i> </Link>
        <Link to="/venues" className="header-link"> <h3>Venues</h3> </Link>
        <Link to="/artists" className="header-link"> <h3>Artists</h3> </Link>
        <Link to="/decorators" className="header-link"> <h3>Decorators</h3> </Link>
        <Link to="/events" className="header-link"> <h3>Events</h3> </Link>
    </header>
  )
}

export default Header
