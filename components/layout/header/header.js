import Hero from './hero';
import Nav from '../nav';
import style from './header.module.scss';

export default function Header({ data }) {
    return (
        <>
        <header className={style.banner}>
            <Hero data={data.entry} />
        </header>
        <Nav data={data.artWork} />
        </>
    )
}