import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class Example extends React.Component {
constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
    collapsed: true
    };
}

toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed 
    });
}


render() {
    return (
    <div id='nav-container'>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto nav"><span id='nav-dev'>DEV</span> <span id='nav-links'>LINKS</span></NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" id='nav-toggler' />
        <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar id='navItems'>
            <NavItem >
                {/* link to client dashboard by id ie /client-dashboard/9034890483 */}
                <Link to='/client-dashboard'><h1 id='link'>Dashboard</h1></Link>
            </NavItem>
            <NavItem >
                <Link to='/jobListings'><h1 id='link'>Job Listing</h1></Link>
            </NavItem>
            <NavItem>
                <Link to='/step1'><h1 id='link'>Add Job</h1></Link>
            </NavItem>
            <NavItem>
                <Link to='/chat'><h1 id='link'>Chat</h1></Link>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
    );
}
}

// module.exports = {
//     toggleNavbar
// }