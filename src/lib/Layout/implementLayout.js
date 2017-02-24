import React from "react";

export class Layout extends React.PureComponent {
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

export default function implementLayout(Component) {
  return function LayoutImplementor(props) {
    return (
      <Layout components={props.children}>
        <Component />
      </Layout>
    );
  }
}
