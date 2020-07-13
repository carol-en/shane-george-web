import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import style from './contact.module.scss';

function Contact() {
    return(
        <Layout>
            <Head><title>Contact</title></Head>
            <section>
                <h1>Contact Page</h1>
                <p>Hello from contact page!</p>
            </section>
        </Layout>
    )
}

export default Contact;

