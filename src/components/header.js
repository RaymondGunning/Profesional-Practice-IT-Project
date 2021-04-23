// imports
import React, { Component } from 'react'
import './css/header.css'

import { Navbar,} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (

      <Router>

        <div className="Nav">

          {/* NavBar */}
          <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">E-Commerce Shoe Store</Navbar.Brand>

          </Navbar>
          <br />
        </div>

      </Router>

    );
  }

}
export default Header;
