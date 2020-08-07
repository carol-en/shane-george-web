import '../global.scss';
import Layout from '../components/layout';
import App from 'next/app';
import fetch from 'isomorphic-unfetch';
const { createClient } = require("contentful");

const contentfulClient = createClient({
  space: "kj7xlq8esifs",
  accessToken: "74HPxCQEHQghNRrf2D3jhdZEsur85j6zQ0Hfjjwhq1g"
})


function MyApp({ Component, pageProps, data, artEntries, pageEntries }) {
  
    return (
      <Layout data={data}>
        <Component {...pageProps} {...data}/>
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
    const artPieces =  artEntries.items;
    const pgEntries =  pageEntries.items;
    
    const data = await { entry, artWork, artPieces, pgEntries }

    return { ...appProps, data }
}

  export default MyApp;