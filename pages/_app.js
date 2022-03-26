import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import { StateContext } from '../context/stateContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <StateContext>
    <Layout>
      <Toaster />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>

  </StateContext>
);

export default MyApp;
