import Head from 'next/head';
import Link from 'next/link';


function About() {
    return (
        <>
            <Head><title>About</title></Head>
            <section>
                <h1>About</h1>
                <p>About Page!</p>
                <Link href="/"><a>Return home!</a></Link> <Link href="/contact"><a>Go to contact!</a></Link>
            </section>
        </>
    )
}


export default About;
