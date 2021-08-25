import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Navi = () => (
    <Nav>
        <NavList>
            <NavItem><Link to='/home'>Home</Link></NavItem>
            <NavItem><Link to='/join'>Join</Link></NavItem>
            <NavItem><Link to='/course-register'>Course-Register</Link></NavItem>
            <NavItem><Link to='/login'>Login</Link></NavItem>
            <NavItem><Link to='/online-profiles'>Online-Profiles</Link></NavItem>
            <NavItem><Link to='/school-status'>School</Link></NavItem>
        </NavList>
    </Nav>
);

export default Navi;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`