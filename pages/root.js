import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';


function Root() {
 return(
    <>
        <Head><title>Home Page</title></Head>
        <Nav />
        <section>
            <h1>Home Page</h1>
            <Link href="/about"><a>About</a></Link> <Link href="/contact"><a>Contact</a></Link>
        </section>
    </>
    )
}

export default Root;