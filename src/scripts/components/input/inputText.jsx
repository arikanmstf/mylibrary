import React, { Component } from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  defaultOnChange() {
    return true;
  }

  render() {
    return (

      <input
        type="text"
        className="form-control input input-text"
        placeholder={this.state.placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.Object
};

InputText.defaultProps = {
  placeholder: '',
  onChange: InputText.defaultOnChange
};

export default InputText;
