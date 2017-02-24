import React from "react";
import {implementLayout, Section, Placeholder} from "../../lib/Layout";
import {ArticleTitle, ArticleDescription, ArticleCategories, ArticleTags} from "../";

class ArticleLayout extends React.Component {
  render() {
    return (
      <article>
        <Section>
          <Placeholder for={ArticleTitle} />
          <Placeholder for={ArticleDescription} />
        </Section>
        <Section>
          <Placeholder for={ArticleCategories} />
        </Section>
      </article>
    );
  }
}

class ArticleLayoutMinor extends React.Component {
  render() {
    return (
      <div>
        <Section>
          <Placeholder for={ArticleDescription} />
        </Section>
        <Section>
          <Placeholder for={ArticleTitle} />
          <Placeholder for={ArticleTags} />
          <p>Static stuff</p>
        </Section>
      </div>
    );
  }
}

export default implementLayout(ArticleLayout);
export const ArticleLayout2 = implementLayout(ArticleLayoutMinor);
