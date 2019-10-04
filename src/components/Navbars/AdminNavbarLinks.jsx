/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavItem, Navbar, NavDropdown, MenuItem, Container } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <Container>
        <Navbar bg="light" expand="lg">
         
          {/* <NavItem eventKey={3} href="#" >
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem> */}
        </Navbar>
        <Navbar pullRight>
          {/* <NavItem eventKey={1} href="#" style={{width:"80px"}}>
            Account
          </NavItem> */}
         
          <NavItem eventKey={3} href="#" >
            Log out
          </NavItem>
        </Navbar>
        </Container>
    );
  }
}

export default AdminNavbarLinks;
