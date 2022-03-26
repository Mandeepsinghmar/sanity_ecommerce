import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import { StateContext } from '../context/stateContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>

  </StateContext>
);

export default MyApp;
