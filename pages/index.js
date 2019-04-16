import Link from 'next/link';

import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Index = ({ posts = [] }) => {
  return (
    <Layout>
      <InnerWrap>
        <TextWrap>
          <Text>
            {'<'}Hi, my name is <Blue>Tom</Blue> and I am a passionate web
            developer, currently working at MADFINGER Games {'/>'}
          </Text>
        </TextWrap>
        <SocialWrap>
          <Icon src="/static/Mail.svg" alt="Mail Icon" />
          <Icon src="/static/LinkedIN.svg" alt="LinkedIn Icon" />
          <Icon src="/static/Github.svg" alt="Github Icon" />
          <Icon src="/static/Twitter.svg" alt="Twitter Icon" />
        </SocialWrap>
      </InnerWrap>
    </Layout>
  );
};

const InnerWrap = styled.div`
  margin-top: 15em;
  display: flex;
  justify-content: space-between;
`;

const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  max-width: 3em;
  margin: auto;
  display: block;
`;

const TextWrap = styled.div`
  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

const Text = styled.span`
  color: #343339;
  font-size: 2.5em;
  line-height: 1.5;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 3.3em;
  }
`;

const Blue = styled.span`
  color: #293cfb;
`;

export default Index;
