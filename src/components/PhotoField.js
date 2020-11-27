import React, { useState, useRef } from "react";
import { Field, ErrorMessage } from "formik";
import personPlaceholder from "../images/person-placeholder.jpg";

const FeedbackMessage = ({ children }) => {
  return <div className="invalid-feedback text-center">{children}</div>;
};

function PhotoField({ name, meta }) {
  const [photo, setPhoto] = useState(null);
  const inputRef = useRef(null);
  const photoUrl =
    photo && !meta.error
      ? window.URL.createObjectURL(photo)
      : personPlaceholder;

  return (
    <div>
      <label className="text-center d-block" htmlFor={name}>
        <img
          className="img-thumbnail rounded-circle"
          src={photoUrl}
          alt="Placeholder or user's avatar"
          style={{ maxHeight: 120 }}
        />
      </label>
      <Field name={name}>
        {(props) => {
          // if (props.field.value && props.meta.error) {
          //   props.form.setFieldValue(name, undefined);
          // }

          return (
            <input
              id={name}
              className={meta.error ? "is-invalid" : ""}
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={() => {
                const photo = inputRef.current.files[0];

                setPhoto((oldPhoto) => {
                  if (oldPhoto) {
                    window.URL.revokeObjectURL(photoUrl);
                  }

                  return photo;
                });
                props.form.setFieldValue(name, photo);
              }}
              style={{ display: "none" }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FeedbackMessage} />
    </div>
  );
}

export default PhotoField;
