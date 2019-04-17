import Link from 'next/link';

import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <InnerWrap>
        <TextWrap>
          <Text>Developer. Music lover. Sports fan.</Text>
        </TextWrap>
      </InnerWrap>
      <SocialWrap>
        <Icon src="/static/Mail.svg" alt="Mail Icon" />
        <Icon src="/static/LinkedIN.svg" alt="LinkedIn Icon" />
        <Icon src="/static/Github.svg" alt="Github Icon" />
        <Icon src="/static/Twitter.svg" alt="Twitter Icon" />
      </SocialWrap>
    </Layout>
  );
};

const InnerWrap = styled.div`
  margin-top: 15em;
`;

const SocialWrap = styled.div`
  margin-top: 1em;
`;

const Icon = styled.img`
  max-width: 1.7em;
  margin-right: 1em;
  display: inline-block;
`;

const TextWrap = styled.div`
  @media (min-width: 1024px) {
    width: 75%;
  }
`;

const Text = styled.h1`
  border-right: solid 0.2em #55f897;
  white-space: nowrap;
  font-size: 3em;
  overflow: hidden;
  font-weight: 400;
  animation: animated-text 3s steps(70, end) 1s 1 normal both,
    animated-cursor 600ms steps(70, end) infinite;

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 97%;
    }
  }

  @keyframes animated-cursor {
    from {
      border-right-color: #55f897;
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export default Index;
