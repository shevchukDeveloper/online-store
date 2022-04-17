import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { SHOP_ROUTE } from '../utils/const'

const NavBar = () => {
    const {user} = Context
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
              <NavLink to={SHOP_ROUTE}>Shevchuk Store</NavLink>
    <Nav className="ml-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar