/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
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
