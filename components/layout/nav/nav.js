import style from './nav.module.scss';
import Link from 'next/link';

//  function or conditionals for css classes?

export default function Nav() {
    return (
        <nav className={style.navi}>
            <Link href="/">
                <a className={style.btn}>Test Return</a>
            </Link>
            <Link href="/art/2">
                <a className={style.btn}>Test About</a>
            </Link>
            <Link href="/art/3">
                <a className={style.btn}>Test Contact</a>
            </Link>
        </nav>
    )
}