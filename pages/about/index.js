import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import style from './about.module.scss';



function About() {
    return (
        <Layout>
            <Head><title>About</title></Head>
            <section>
                <h1>About</h1>
                <p>About Page!</p>
            </section>
        </Layout>
    )
}

export default About;
