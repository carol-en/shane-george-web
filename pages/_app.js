import '../global.scss';
import Layout from '../components/layout';
import App from 'next/app';
import fetch from 'isomorphic-unfetch';
const { createClient } = require("contentful");

const contentfulClient = createClient({
  space: "6jizbkvr12of",
  accessToken: "L60lNNHrqGGj8Y3zXd-cnI58eWKKwwcSCxyt1Z9Pm2Q"
})


function MyApp({ Component, pageProps, data }) {
  
    return (
      <Layout data={data}>
        <Component {...pageProps} {...data} />
      </Layout>
    )
  }

  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
    const pages = await fetch('https://jsonplaceholder.typicode.com/posts');
    const entry = await pages.json();
    const artWork = await photos.json();

    const artEntries = await contentfulClient.getEntries(({
      "content_type": "artWork",
      "order":"sys.createdAt"
      }));

      const pageEntries = await contentfulClient.getEntries(({
        "content_type": "page",
        "order":"sys.createdAt"
        }));
    const artPieces = await artEntries.items;
    const pgEntries = await pageEntries.items;
    const data = await {entry, artWork, artPieces, pgEntries }

    return { ...appProps, data }
}

  export default MyApp;