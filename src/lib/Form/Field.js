import React, { Component, PropTypes } from 'react';

export default class Field extends Component {
  constructor(props, context) {
    super(props, context);
    this.hookMethodsTo(props.fieldName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fieldName !== this.props.fieldName) {
      this.hookMethodsTo(nextProps.fieldName);
    }
  }

  render() {
    const Input = this.props.children;

    if (!Input) {
      return null;
    }

    return (
      <Input.type value={this.value}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        {...Input.props} />
    );
  }

  get value() {
    const formContext = this.context.form;
    const fieldName = this.props.fieldName;

    if (formContext.data && fieldName) {
      return formContext.data[fieldName];
    }
  }

  hookMethodsTo(fieldName) {
    const formContext = this.context.form;
    if (!formContext) {
      console.warn('Fields should be used only within the <Form /> context');
    }

    const {onChange, onBlur, onFocus} = formContext;

    if (typeof onChange === 'function') {
      this.onChange = onChange.bind(this, fieldName);
    }
    if (typeof onBlur === 'function') {
      this.onBlur = onBlur.bind(this, fieldName);
    }
    if (typeof onFocus === 'function') {
      this.onFocus = onFocus.bind(this, fieldName);
    }
  }
}

Field.contextTypes = {
  form: PropTypes.object
};

Field.propTypes = {
  fieldName: PropTypes.string,
  children: PropTypes.node
};
