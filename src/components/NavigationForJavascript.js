import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavigationForJavascript = () => (
    <Nav>
        <NavList>
            <NavItem><Link to='/basic'>Basic</Link></NavItem> 
            <NavItem><Link to='/arrowFunction'>ArrowFunction</Link></NavItem>     
            <NavItem><Link to='/arguments'>Arguments</Link></NavItem>   
            <NavItem><Link to='/template-literal'>Template Literal</Link></NavItem>   
            <NavItem><Link to='/literal-method'>Literal Method</Link></NavItem>   
            <NavItem><Link to='/destructuring'>Destructuring</Link></NavItem>   
            <NavItem><Link to='/loop'>Loop</Link></NavItem>   
            <NavItem><Link to='/array-method'>Array Method</Link></NavItem>   
            <NavItem><Link to='/spread-operator-rest-parameter'>Spread Operator Rest Parameter</Link></NavItem> 
        </NavList>
        <NavList>
            <NavItem><Link to='/object-literal'>Object Literal</Link></NavItem>   
            <NavItem><Link to='/symbol'>Symbol</Link></NavItem>   
            <NavItem><Link to='/class'>Class</Link></NavItem>   
            <NavItem><Link to='/promise'>Promise</Link></NavItem>   
            <NavItem><Link to='/generator'>Generator</Link></NavItem>   
            <NavItem><Link to='/proxy'>Proxy</Link></NavItem>   
            <NavItem><Link to='/set-map'>Set Map</Link></NavItem>   
            <NavItem><Link to='/Array'>Array</Link></NavItem>   
            <NavItem><Link to='/ES2017'>ES2017</Link></NavItem>   
            <NavItem><Link to='/async-await'>Async Await</Link></NavItem>   
            <NavItem><Link to='/ES2018'>ES2018</Link></NavItem>   
            <NavItem><Link to='/ES2019'>ES2019</Link></NavItem>   
            <NavItem><Link to='/ES2020'>ES2020</Link></NavItem>   
            <NavItem><Link to='/typescript'>Typescript</Link></NavItem>   
        </NavList>
    </Nav>
);

export default NavigationForJavascript;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: auto;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`