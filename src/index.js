import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { Login } from "./components/auth";
import { Users, AddUser } from "./components/users";
import {Customer} from './components/customer'

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Nav>
              <Link to="/" className="text-light mr-5 " role="button">
                Index
              </Link>
          </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Users" id="users-nav-dropdown">
              <Link to="/users" className="dropdown-item" role="button">
                Users
              </Link>
              <Link to="/users/add" className="dropdown-item" role="button">
                Add
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="mr-auto">
            <NavDropdown title="Customer" id="users-nav-dropdown">
              <Link to="/customer" className="dropdown-item" role="button">
                Customer Page
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container style={{ minHeight: "70vh" }}>
        <Switch>

          <Route path="/users/add" component={AddUser} />
          <Route path="/users" component={Users} />
          <Route path="/customer" component={Customer} />
          <Route path="/" component={Login} />
          
        </Switch>
      </Container>

    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
