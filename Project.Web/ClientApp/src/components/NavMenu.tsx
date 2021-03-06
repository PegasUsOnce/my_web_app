import React, { useCallback, useContext, useState } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import './NavMenu.css'
import { AuthorizaionContext } from './authorization/AuthorizationContext'

export const NavMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const { isAuthorized, signOut } = useContext(AuthorizaionContext)

  const toggleNavbar = useCallback(() => {
    setCollapsed(!collapsed)
  }, [setCollapsed, collapsed])

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">Project.Web</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              {isAuthorized && <NavItem>
                <NavLink tag={Link} className="text-dark" onClick={signOut} to="/">Sign Out</NavLink>
              </NavItem>}
              {!isAuthorized && <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">Log In</NavLink>
              </NavItem>}
              {isAuthorized && <NavItem>
                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
              </NavItem>}
              {isAuthorized && <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
