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
    const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
    const pages = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await pages.json();
    const artWork = await photos.json();
    const data = await {posts, artWork}
    return { ...appProps, data }
}

  export default MyApp;