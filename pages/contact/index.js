import Head from 'next/head';
import Link from 'next/link';
import style from './contact.module.scss';

function Contact(props) {
    console.warn('contact', props);
    return(
        <>
            <Head><title>Contact</title></Head>
            <section>
                <h1>Contact Page</h1>
                <p>Hello from contact page!</p>
            </section>
        </>
    )
}

export default Contact;

