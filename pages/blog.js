import Link from 'next/link';
import styled from '@emotion/styled';

import Layout from '../components/Layout';

import { getBlogPostsAPI } from '../api';
import { linkResolver } from '../helpers';

const Blog = props => {
  const { posts = [] } = props;
  return (
    <Layout>
      <h1>Blog post</h1>
      {
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Link
                as={linkResolver(post)}
                href={`/blogPost?slug=${post.uid}`}
                passHref
              >
                <a>{post.data.title[0].text}</a>
              </Link>
            </li>
          ))}
        </ul>
      }
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  // Here we call the API and request 5 documents
  const response = await getBlogPostsAPI({ pageSize: 5 });
  return {
    posts: response.results
  };
};

export default Blog;
