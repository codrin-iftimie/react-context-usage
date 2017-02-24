import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  getChildContext() {
    return {
      form: {
        onChange: this.props.onChange,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        data: this.props.data
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
  data: PropTypes.object
};

Form.childContextTypes = {
  form: PropTypes.object
};
