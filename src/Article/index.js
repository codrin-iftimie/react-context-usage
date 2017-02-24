import React from "react";

import {extendDefaults} from "../lib/Layout"

export default class Article extends React.PureComponent {
  render() {
    const article = this.props.article;

    if (!article) {
      return null;
    }

    let defaults = [
      <ArticleTitle text={article.title} />,
      <ArticleDescription>
        {article.description}
      </ArticleDescription>,
      <ArticleCategories items={article.categories} />,
      <ArticleTags items={article.tags} />
    ];

    const Layout = this.props.layout;

    return (
      <Layout>
        {extendDefaults(defaults, this.props.children)}
      </Layout>
    )
  }
}

export function ArticleTitle(props) {
  return <h1>{props.text}</h1>;
}

export function ArticleDescription(props) {
  return <p>{props.children}</p>;
}

function renderCategory(item, index) {
  return <li key={index}>{item}</li>
}
export function ArticleCategories(props) {
  return (
    <div>
      <h4>{props.title || "Categories"}</h4>
      <ul>
        {props.items.map(renderCategory, this)}
      </ul>
    </div>
  )
}

export function ArticleTags(props) {
  return <ArticleCategories title="tags" items={props.items} />
}
