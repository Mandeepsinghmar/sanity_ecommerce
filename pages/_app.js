import React from 'react';

import { Layout } from '../components';
import { StateContext } from '../context/stateContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <StateContext>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </StateContext>
);

export default MyApp;
