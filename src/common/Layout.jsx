/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import Head from 'next/head';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      padding: 86px 54px 0;
    `}>
      <header>
        <div css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}>
          <div css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          `}>
            <h1 css={css`
              width: 763px;
              height: 75px;
              font-weight: 700;
              font-size: 64px;
              color: #2B3172;
            `}>
              Line of sight
            </h1>
          </div>
          <Image
            priority
            src='/images/Sirius Future Full Logo - 400 px 1.png'
            // className={utilStyles.borderCircle}
            height={134}
            width={337}
            // alt={name}
          />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
