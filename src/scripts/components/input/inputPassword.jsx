import React, { Component } from 'react';

export default class InputPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      placeholder: props.placeholder
    };
    this.handleChange = this.handleChange.bind(this);

  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (

      <input
        type="password"
        className="form-control input input-password"
        placeholder= { this.state.placeholder }
        onChange={ this.handleChange }/>
    );
  }
}
