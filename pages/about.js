import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { getAbout } from './../api';

const About = props => {
  const {
    data = [],
    data: { text, title }
  } = props.about[0];

  const titleText = data.title[0].text;
  return (
    <Layout>
      <Headline>{titleText}</Headline>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const response = await getAbout();
  return {
    about: response.results
  };
};

const Headline = styled.h1`
  font-weight: 400;
`;

export default About;
