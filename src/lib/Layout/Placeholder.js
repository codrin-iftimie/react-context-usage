import React from "react";

export default class Placeholder extends React.Component {
  render() {
    const layoutChildren = React.Children.toArray(this.context.components);

    const replacer = layoutChildren.find((child) => {
      return child.type === this.props.for
    });
    if (!replacer) {
      return null;
    }

    return replacer;
  }
}

Placeholder.contextTypes = {
  components: React.PropTypes.node
}
