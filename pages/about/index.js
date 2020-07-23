import Head from 'next/head';
import Link from 'next/link';
import style from './about.module.scss';



function About(props) {
    console.warn('about', props);
    return (
        <>
            <Head><title>About</title></Head>
            <section>
                <h1>About</h1>
                <p>About Page!</p>
            </section>
        </>
    )
}

export default About;
