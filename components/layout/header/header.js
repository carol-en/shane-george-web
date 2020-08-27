import Hero from './hero';
import Nav from '../nav';
import style from './header.module.scss';

export default function Header({ data, tags, pages }) {
    return (
        <>
        <header className={style.banner}>
            <Hero pages={pages}/>
        </header>
        <Nav tags={tags}/>
        </>
    )
}