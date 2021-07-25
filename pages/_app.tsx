import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { useStore } from 'redux/store';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>iDev Community for Developers and Designers</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}
