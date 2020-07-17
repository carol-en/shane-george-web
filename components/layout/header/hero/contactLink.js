import Link from 'next/link';
import style from './hero.module.scss';

export default function ContactLink() {
    return <Link href="/contact"><a className={style.contact_link}>Contact</a></Link>
}