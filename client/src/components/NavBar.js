
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import About from './About';
import Create from './Create';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
        
        <Router>
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="/">WorldLog</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/create"}>Create</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>

            <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/create" element={<Create />}></Route>
            </Routes>
            </div>
            
        </Router>
        
    )
  }
}
