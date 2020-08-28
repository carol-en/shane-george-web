import style from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = ({ tags }) => {
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