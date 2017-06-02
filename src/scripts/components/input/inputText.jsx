import React, { Component } from 'react';

export default class InputText extends Component {
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
        type="text"
        className="input input-text"
        placeholder= { this.state.placeholder }
        onChange={ this.handleChange }/>
    );
  }
}
