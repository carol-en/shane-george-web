import Hero from './hero';
import Nav from './nav';
import style from './header.module.scss';

export default function Header() {
    return (
        <header className={style.banner}>
            <h2>Header Component</h2>
            <Hero />
            <Nav />
        </header>
    )
}