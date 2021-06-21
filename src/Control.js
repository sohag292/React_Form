import React, { Component } from "react";
import PropTypes from "prop-types";
const TextInput = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      onChange={props.onChange}
      className="form-control"
      type={props.type}
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
    />
  </div>
);
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  type: "text",
  label: "",
};

export default class Control extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onchangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onhendelsubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
    event.target.reset();
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onhendelsubmit}>
          <TextInput
            name="name"
            placeholder="sn sohag shah"
            onChange={this.onchangeHandler}
            value={name}
          />

          <TextInput
            name="email"
            type="email"
            placeholder="sohagshah570@gmail.com"
            value={email}
            onChange={this.onchangeHandler}
          />

          <TextInput
            name="password"
            type="password"
            label="Enter password"
            placeholder="******"
            value={password}
            onChange={this.onchangeHandler}
          />

          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}
