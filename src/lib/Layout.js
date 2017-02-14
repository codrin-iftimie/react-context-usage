import React from "react";

export default class Layout extends React.Component {
  getChildContext() {
    return {
      components: this.props.components
    };
  }

  render() {
    return <span>{this.props.children}</span>;
  }
}

Layout.childContextTypes = {
  components: React.PropTypes.node
}
