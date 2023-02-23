import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, password } = this.state;

    let errors = {};
    let isValid = true;

    if (!name) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!email) {
      isValid = false;
      errors["email"] = "Please enter your email address.";
    }

    if (!password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors
    });

    if (isValid) {
      alert('Form submitted!');
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
          {errors.name &&
            <div className="alert alert-danger">{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
          {errors.email &&
            <div className="alert alert-danger">{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
          {errors.password &&
            <div className="alert alert-danger">{errors.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
