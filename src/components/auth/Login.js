import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Alert, Row, Col, Form, Button } from "react-bootstrap";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ variant: "info", msg: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      
    } else {
      setAlert({
        variant: "warning",
        msg: "Fill out both email and username fields",
      });
    }
  };

  return loggedIn ? (
    <Redirect to="/" />
  ) : (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Form action="/" method="post" onSubmit={onSubmit}>
          <fieldset className="mb-4 mt-3 border p-4 rounded">
            <h1 className="mb-4 text-center">Log In</h1>
            {alert.msg ? (
              <Alert variant={alert.variant}>{alert.msg}</Alert>
            ) : null}
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value.trim())}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value.trim())}
                value={password}
              />
            </Form.Group>

            <Button className="mt-3" variant="primary" type="submit">
              Log In
            </Button>
          </fieldset>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
