import React from 'react';
import {Form, Field, extendFields} from '../lib/Form';

import L1 from './defaultLayout';

export default class ArticleForm extends React.PureComponent {
  render() {
    const article = this.props.article;

    if (!article) {
      return null;
    }

    let defaults = [
      <Field fieldName="title">
        <input />
      </Field>,
      <Field fieldName="description">
        <textarea  rows="20" cols="120"/>
      </Field>
    ];

    const Layout = this.props.layout;

    return (
      <Form data={article} onChange={this.props.onChange}>
        <Layout>
          {extendFields(defaults, this.props.children)}
        </Layout>
      </Form>
    )
  }
}

ArticleForm.defaultProps = {
  layout: L1
};
