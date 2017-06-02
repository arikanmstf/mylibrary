import React, { Component } from 'react';

export default class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (

      <input
        type="text"
        className="form-control input input-text"
        placeholder= { this.state.placeholder }
        onChange={ this.handleChange }/>
    );
  }
}
