import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Portfolio from '../components/portfolio';
import fetch from 'isomorphic-unfetch';


function Root(props) {
 return(
    <Layout>
        <Head><title>Home Page</title></Head>
        <>
            <h1>Home Page</h1>
            <Portfolio photos={props} />
        </>

    </Layout>
    )
}

Root.getInitialProps = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return data;
}

export default Root;