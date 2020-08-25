import Hero from './hero';
import Nav from '../nav';
import style from './header.module.scss';

export default function Header({ data, tags }) {
    return (
        <>
        <header className={style.banner}>
            <Hero data={data.entry} pgEntries={data.pgEntries}/>
        </header>
        <Nav data={data.artWork} artPieces={data.artPieces} tags={tags}/>
        </>
    )
}