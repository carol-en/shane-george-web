import { useRouter } from 'next/router';
import Head from 'next/head';
import Thumbnails from './thumbnails';
import style from './portfolio.module.scss';

const FilterArt = ({ art, tags }) => {

    return (
        <>
        <Head><title>Shane George Art</title></Head>
        <section className={style.port}>
            <Thumbnails art={art} tags={tags} />
        </section>
        </>
    )
}

export default FilterArt;