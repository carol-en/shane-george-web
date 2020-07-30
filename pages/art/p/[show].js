import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../../../components/layout/nav';

const ShowPage = (props) => {
    const router = useRouter();
    const { show, albumId, id, title, url, thumbnailUrl } = router.query;

    // console.warn('show data ', router);

    return (
        <>
            <Head><title>Dynamic Page</title></Head>
            <section>
                <h1>{show}: Dynamic Show Page!</h1>
            </section>
        </>
    )
}

export default ShowPage;