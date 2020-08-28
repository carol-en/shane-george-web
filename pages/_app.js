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

    const artEntries = await contentfulClient.getEntries(({
      "content_type": "artWork",
      "order":"sys.createdAt",
      }));

    const pageEntries = await contentfulClient.getEntries(({
      "content_type": "page",
      "order":"sys.createdAt"
      }));

    const artTags = await contentfulClient.getContentType("artWork");
    const tagsList = artTags.fields[2].items.validations[0].in;
    const art =  artEntries.items;
    const pages =  pageEntries.items;
    
    const data = await { art, pages, tagsList }

    return { ...appProps, data }
}

  export default MyApp;