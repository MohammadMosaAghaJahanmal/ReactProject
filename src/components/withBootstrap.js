import React from "react";
import { ErrorMessage } from "formik";

const FeedbackMessage = ({ children }) => {
  return <div className="invalid-feedback">{children}</div>;
};

const withBootstrap = (WrappedComponent) => {
  const WithBootstrap = (props) => {
    const {
      type,
      label,
      field,
      meta: { error, touched },
    } = props;
    const fieldClasses = ["form-control"];

    if (error && touched) {
      fieldClasses.push("is-invalid");
    }

    if (error && touched && fieldClasses.includes("is-valid")) {
      fieldClasses.splice(fieldClasses.indexOf("is-valid"), 1);
    }

    if (!error && touched && fieldClasses.includes("is-invalid")) {
      fieldClasses.splice(fieldClasses.indexOf("is-invalid"), 1);
    }

    if (!error && touched && !fieldClasses.includes("is-valid")) {
      fieldClasses.push("is-valid");
    }

    return (
      <div className="form-group">
        <label className="form-label" htmlFor={field.name}>
          {label}
        </label>
        <WrappedComponent
          id={field.name}
          type={type}
          className={fieldClasses.join(" ")}
          {...field}
        />
        <ErrorMessage name={field.name} component={FeedbackMessage} />
      </div>
    );
  };

  return WithBootstrap;
};

export default withBootstrap;
