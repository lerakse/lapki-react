import { useState } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '@/components/Layout/Layout';
import { makeStore } from '@/store';
import theme from '@/theme';

export default function App(props) {
  const { Component, pageProps } = props;
  // store живёт, пока открыта вкладка: при переходах через <Link>
  // страница не перезагружается и избранное сохраняется
  const [store] = useState(makeStore);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </AppCacheProvider>
  );
}
