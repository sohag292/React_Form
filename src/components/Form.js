import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

const Form = ({
  values,
  agreement,
  handleChange,
  handleAgreement,
  handleSubmit,
  errors,
}) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      name="name"
      placeholder="Enter your Name"
      onChange={handleChange}
      label="Name"
      value={values.name}
      error={errors.name}
    />

    <TextInput
      name="email"
      type="email"
      label="Email"
      placeholder="Enter your Gmail"
      value={values.email}
      onChange={handleChange}
      error={errors.email}
    />

    <TextInput
      name="password"
      type="password"
      label="password"
      placeholder="******"
      value={values.password}
      onChange={handleChange}
      error={errors.password}
    />
    <TextInput
      name="birthDate"
      type="date"
      label="BirthDate"
      value={values.birthDate}
      onChange={handleChange}
      error={errors.birthDate}
    />

    <div className="form-group ">
      <label>
        <input
          className="mx-2"
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        />
        Male
        <input
          className="mx-2"
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        />
        Female
        <input
          className="mx-2"
          type="radio"
          name="gender"
          value="Others"
          onChange={handleChange}
        />
        Others
      </label>
      {errors.gender && (
        <div className="invalid-feedback"> {errors.gender}</div>
      )}
    </div>

    <div className="form-group">
      <input
        type="checkbox"
        name="agreement"
        checked={agreement}
        onChange={handleAgreement}
      />{" "}
      I am agree
    </div>

    <button className="btn btn-primary" type="submit" disabled={!agreement}>
      Create User
    </button>
  </form>
);

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Form;
