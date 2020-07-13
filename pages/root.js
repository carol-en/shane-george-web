import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Portfolio from '../components/portfolio';


function Root() {
 return(
    <Layout>
        <Head><title>Home Page</title></Head>
        
        <section>
            <h1>Home Page</h1>
            <Portfolio />
        </section>
    </Layout>
    )
}

export default Root;