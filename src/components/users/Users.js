import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import { Link } from "react-router-dom";
import IMG from "../../images/sample.jpg";


function Users() {
  const [users, setUsers] = useState([]);
  const assetsHost = "http://localhost:8000";


  const deleteUser = (userId) => {
    

    swal({
      title: "Are you sure?",
      text: `To delete user '${"Ahmad"} ${"Khan"}'?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
          swal(
            `User '${"Ahmad"} ${"Khan"}' has successfully been deleted`,
            {
              icon: "success",
            }
          );
    });
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <div className="klc-data-list">
          <Row>
            <Col md={{ span: 7 }}>
              <h1>All Users</h1>
            </Col>
            <Col>
              <div className="h-100 d-flex justify-content-end align-items-center">
                <Link className="btn btn-info" to="/users/add">
                  Add User
                </Link>
              </div>
            </Col>
          </Row>
          <ul className="list-unstyled mt-4">
            
                <li key={1} className="rounded mb-2">
                  <Row>
                    <Col md={{ span: 8 }}>
                      <img
                        className="img-thumbnail rounded-circle w-25 mr-3"
                        src={IMG}
                        alt={""}
                        style={{ height: 60 }}
                      />
                      <div className="d-inline-flex flex-column">
                        <span className="font-weight-normal lead">
                          {"Ahmad"} {"Khan"}
                        </span>
                        <span className="text-muted">{"example@example.com"}</span>
                      </div>
                    </Col>
                    <Col>
                      <div className="actions-group">
                        <Button className="mr-2" variant="primary" size="sm">
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => deleteUser(1)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}


export default Users;
