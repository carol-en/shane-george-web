import Link from 'next/link';
import style from './hero.module.scss';

export default function ShaneLogoLink() {
    return (
        <>
            <h1><Link href="/"><a className={style.logo}>Shane George</a></Link></h1>
        </>
    )
}