import Head from 'next/head';
import Link from 'next/link';

function Contact() {
    return(
        <>
            <Head><title>Contact</title></Head>
            <section>
                <h1>Contact Page</h1>
                <p>Hello from contact page!</p>
                <Link href="/"><a>return to home</a></Link> <Link href="/about"><a>go to about</a></Link>
            </section>
        </>
    )
}

export default Contact;

