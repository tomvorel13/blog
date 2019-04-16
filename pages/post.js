import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { getBlogPostAPI } from '../api';
import linkResolver from '../helpers';

import Layout from '../components/Layout';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    return {
      post: response
    };
  }

  render() {
    const post = this.props.post.data;
    return (
      <Layout>
        <article>
          <h1>{post.title.length ? post.title[0].text : ''}</h1>
          {RichText.render(post.text, linkResolver)}
        </article>
      </Layout>
    );
  }
}
