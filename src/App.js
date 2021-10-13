// main file
// import list
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Create from './components/create';
import Read from './components/read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            // navigation bar from previously imported bootstrap
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              // nav bar shows options home, read, and create
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />
        <Switch>
          // routers for link in nav bar
          <Route path='/' component={Content} exact />
          <Route path='/create' component={Create} exact />
          <Route path='/read' component={Read} exact />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
