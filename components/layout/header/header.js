import Hero from './hero';
import style from './header.module.scss';

export default function Header() {
    return (
        <header className={style.banner}>
            <Hero />
        </header>
    )
}