import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import Layout from 'src/components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from '@services/redux/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>NextJS TailwindCSS TypeScript Starter</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
