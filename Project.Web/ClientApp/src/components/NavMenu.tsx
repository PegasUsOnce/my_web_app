import React, { useCallback, useContext, useState } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import './NavMenu.css'
import { AuthorizaionContext } from './authorization/AuthorizationContext'

export const NavMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const { isAuthorized } = useContext(AuthorizaionContext)
  const navigate = useNavigate()
  const goToCounter = () => navigate(isAuthorized ? '/counter' : '/login')

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
              <NavItem>
                <button className="text-dark" onClick={goToCounter}>Counter</button>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
