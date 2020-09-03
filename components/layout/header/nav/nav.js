import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './nav.module.scss';

const Nav = ({ tags, art }) => {
    return (
        <nav className={style.navi}>
            <Tags tags={tags} />
        </nav>
    )
}

const Tags = ({ tags }) => {
    const tagItem = tags.map((tag, i) => {
        return (
            <Link key={i} href={`/art/${tag}`}>
                <a className={style.btn}>{tag}</a>
            </Link>
        )
    });

    return (
        <>
            <Link href="/">
                <a className={style.btn}>All Art</a>
            </Link>
            {tagItem}
        </>
    )
}

export default Nav;