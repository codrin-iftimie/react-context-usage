import React from "react";
import {Layout, Section, Placeholder} from "../../lib";
import {ArticleTitle, ArticleDescription, ArticleCategories} from "../";

export default class ArticleLayout extends React.Component {
  render() {
    return (
      <Layout components={this.props.children}>
        <Section>
          <Placeholder for={ArticleTitle} />
          <Placeholder for={ArticleDescription} />
        </Section>
        <Section>
          <Placeholder for={ArticleCategories} />
        </Section>
      </Layout>
    );
  }
}


export class ArticleLayout2 extends React.Component {
  render() {
    return (
      <Layout components={this.props.children}>
        <Section>
          <Placeholder for={ArticleDescription} />
        </Section>
        <Section>
          <Placeholder for={ArticleTitle} />
          <p>Static stuff</p>
        </Section>
      </Layout>
    );
  }
}
