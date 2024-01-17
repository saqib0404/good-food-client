import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <NavLink className="text-decoration-none my-nav mx-4">Home</NavLink>
                        <NavLink className="text-decoration-none my-nav mx-4">About</NavLink>
                        <NavLink className="text-decoration-none my-nav mx-4">Contact</NavLink>

                    </Nav>

                    <Button variant="outline-success">Login</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header