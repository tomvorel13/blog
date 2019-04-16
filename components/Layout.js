import Head from 'next/head';
import styled from '@emotion/styled';
import { injectGlobal } from 'emotion';

import Header from './Header';

const Layout = props => {
  return (
    <Wrapper>
      <Head>
        <title>Tom Vorel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  font-family: 'Roboto Mono', monospace;
  background-color: #ffffff;
  color: #343339;
  font-size: 62.5%;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  font-size: 1.6em;
  max-width: 90%;
  margin: 0 auto;
`;

export default Layout;
