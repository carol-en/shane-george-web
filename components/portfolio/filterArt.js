import { useRouter } from 'next/router';
import Head from 'next/head';
import Thumbnails from './thumbnails';
import style from './portfolio.module.scss';

const FilterArt = ({ art }) => {

    return (
        <>
        <Head><title>Shane George Art</title></Head>
        <section className={style.port}>
            <Thumbnails art={art} />
        </section>
        </>
    )
}

export default FilterArt;