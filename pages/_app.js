import '../global.scss';
import Layout from '../components/layout';
import App from 'next/app';
import fetch from 'isomorphic-unfetch';

function MyApp({ Component, pageProps, data }) {

    return (
      <Layout>
        <Component {...pageProps} {...data} />
      </Layout>
    )
  }

  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return { ...appProps, data }
}

  export default MyApp;