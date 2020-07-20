import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Nav from '../../components/layout/nav';

// https://www.youtube.com/watch?v=H7sHa7Ru9cY

const ArtWork = () => {
    const router = useRouter();
    const { id } = router.query;

  return(
    <Layout>
        <Head><title>Dynamic Page</title></Head>
        <Nav />
        <h1>Post: {id}</h1>
        <>
            <h1>This is a Dynamic Page</h1>
        </>

    </Layout>
    )
}

export default ArtWork;