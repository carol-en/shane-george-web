import { useRouter } from 'next/router';
import Head from 'next/head';
import Thumbnails from './thumbnails';
import style from './portfolio.module.scss';

function allArt({ artt }) {
    const router = useRouter();
    const art = artt;

        console.log(art)
    return (
        <>
        <Head><title>Shane George Art</title></Head>
        <section className={style.port}>
            <Thumbnails art={art} />
        </section>
        </>
    )
}

export default allArt;