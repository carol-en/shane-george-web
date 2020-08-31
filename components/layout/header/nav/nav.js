import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './nav.module.scss';

const Nav = ({ tags, art }) => {
    return (
        <nav className={style.navi}>
            <ToggleNav art={art} tags={tags} />
        </nav>
    )
}
//=================
// HIDE/SHOW TAGS NAVIGATION DEPENDING ON PAGE
//=================
const ToggleNav = ({ art, tags }) => {
    const router = useRouter();
    const { query, pathname, route } = router;
    let slug;
  
    // Determine what page you're on
    const checkIfInPages = (pathname, query) => {
        let { page, param } = query;
        let nav = <Tags tags={tags} />;
            if(pathname !== '/' && page) { // If you're not on the home page, but on the [...page] component. Aka show page.
                slug = page[page.length-1];
                let artId = page[page.length-2];
                let checkArtwork = art[artId];
    
                if(checkArtwork) { // Check if url has necessary data to pull artwork api & that it exists/matches. If it does, do not show nav.
                    let { id } = checkArtwork.sys;
                    if(slug === id) nav = null;
                } else return nav  // if you cant pull art data, show nav
            } 
            else if(param) nav = null; // If you're on the  [...param] component don't show nav. Aka about/contact pages
            else return nav;
        }
    
    const toggleNav = checkIfInPages(pathname, query);

    return <>{toggleNav}</>;
}

const Tags = ({ tags }) => {
    const tagItem = tags.map((tag, i) => {
        return (
            <Link key={i} href={`/art/${tag}`}>
                <a className={style.btn}>{tag}</a>
            </Link>
        )
    });

    return (
        <>
            <Link href="/">
                <a className={style.btn}>All Art</a>
            </Link>
            {tagItem}
        </>
    )
}

export default Nav;