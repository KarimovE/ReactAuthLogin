import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} 
from 'reactstrap'


export const Header=()=>{
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <NavItem>
                            <NavLink to={"/product"} className="nav-link">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/"} className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/login"} className="nav-link">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={"/users"} className="nav-link">Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}