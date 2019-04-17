import styled from '@emotion/styled';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Headline>About Page</Headline>
    </Layout>
  );
};

const Headline = styled.h1`
  font-weight: 400;
`;

export default About;
