import Link from 'next/link';
import style from './hero.module.scss';

export default function AboutLink() {
    return <Link href="/about"><a  className={style.about_link}>About</a></Link>
}