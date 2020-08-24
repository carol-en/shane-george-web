import { useRouter } from 'next/router';
import Head from 'next/head';
import Thumbnails from './thumbnails';
import style from './portfolio.module.scss';

const FilteredArt = ({ art }) => {
    const filteredArt = art.artPieces;
    
    return (
        <>
        <Head><title>Shane George Art</title></Head>
        <section className={style.port}>
            <Thumbnails art={filteredArt} />
        </section>
        </>
    )
}

export default FilteredArt;