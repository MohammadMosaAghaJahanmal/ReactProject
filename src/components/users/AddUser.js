import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Row, Col, Button } from "react-bootstrap";
import withBootstrap from "../withBootstrap";
import PhotoField from "../PhotoField";
import API from "../../API";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name must be at least 3 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Type a correct email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),
  photo: Yup.mixed()
    .required("Photo is required")
    .test("photo", "Only image files are allowed", (value) => {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      return value ? allowedTypes.includes(value.type) : false;
    }),
});

const KaryalFormGroup = withBootstrap(Field);

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  photo: undefined,
};

function AddUser() {
  const [redirect, setRedirect] = useState(false);

  const onSubmit = (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([name, value]) => {
      formData.append(name, value);
    });

    console.log("FormData Values:", formData.values());

    API.post("/users", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then(({ data }) => {
      if (data.status === "success") {
        setRedirect(true);
      }
    });
  };

  const formikProps = {
    initialValues,
    onSubmit,
    validationSchema,
  };

  return redirect ? (
    <Redirect to="/users" />
  ) : (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Formik {...formikProps}>
          {({ getFieldMeta, validateField }) => {
            return (
              <Form method="post">
                <fieldset className="mb-4 mt-3 border p-4 rounded">
                  <h1 className="mb-4 text-center">Add User</h1>

                  <div className="mb-4">
                    <PhotoField
                      label="Photo"
                      name="photo"
                      meta={getFieldMeta("photo")}
                    />
                  </div>

                  <Row>
                    <Col md={6}>
                      <Field name="firstName">
                        {(props) => (
                          <KaryalFormGroup
                            label="First Name"
                            type="text"
                            {...props}
                          />
                        )}
                      </Field>
                    </Col>
                    <Col md={6}>
                      <Field name="lastName">
                        {(props) => (
                          <KaryalFormGroup
                            label="Last Name"
                            type="text"
                            {...props}
                          />
                        )}
                      </Field>
                    </Col>
                  </Row>

                  <Field name="email">
                    {(props) => (
                      <KaryalFormGroup label="Email" type="email" {...props} />
                    )}
                  </Field>

                  <Field name="password">
                    {(props) => (
                      <KaryalFormGroup
                        label="Password"
                        type="password"
                        {...props}
                      />
                    )}
                  </Field>

                  <Button className="mt-4" variant="primary" type="submit">
                    Add User
                  </Button>
                  <Link className="btn btn-secondary mt-4 ml-2" to="/users">
                    Cancel
                  </Link>
                </fieldset>
              </Form>
            );
          }}
        </Formik>
      </Col>
    </Row>
  );
}

export default AddUser;
