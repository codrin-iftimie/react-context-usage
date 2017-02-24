import React from "react";

export default class FieldPlaceholder extends React.Component {
  render() {
    const layoutChildren = React.Children.toArray(this.context.components);

    const replacer = layoutChildren.find((child) => {
      return child.props.fieldName === this.props.fieldName
    });

    if (!replacer) {
      return null;
    }


    return replacer;
  }
}

FieldPlaceholder.contextTypes = {
  components: React.PropTypes.node
}
