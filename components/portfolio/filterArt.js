import { useRouter } from 'next/router';
import Thumbnails from './thumbnails';
import style from './portfolio.module.scss';

// =======================
// WRAPPING/ENTIRE PAGE FOR THUMBNAILS
// =======================
const FilterArt = ({ art, tags }) => {
    return (
        <>
        <section className={style.port}>
            <Thumbnails art={art} tags={tags} />
            {/* This is new */}
        </section>
        </>
    )
}

export default FilterArt;