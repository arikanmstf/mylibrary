import React, { Component } from 'react';

export default class InputPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    if(this.props.onChange) {
      this.props.onChange(event.target.value);
    }
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
