import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Logo src="/static/logo-real.svg" alt="Logo" />
      </Link>
      <Menu>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 90%;
  font-size: 1.6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 4em;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;

  a {
    color: #343339;
    text-decoration: none;
    margin-right: 2em;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default Header;
