import Link from 'next/link';
import style from './hero.module.scss';

export default function Hero() {
    return (
        <aside className={style.logo}>
            <Link href="/"><a>Return</a></Link> <Link href="/about"><a>About</a></Link> <Link href="/contact"><a>Contact</a></Link>
            <h1>Hero Component!</h1>
        </aside>
    )
}