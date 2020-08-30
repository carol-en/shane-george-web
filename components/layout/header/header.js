import Hero from './hero';
import Nav from '../nav';
import style from './header.module.scss';
import { useRouter } from 'next/router';

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
       let nav;
        if(pathname !== '/' && page) { // If you're not on the home page, but on the [...page] component. Aka show page.
            slug = page[page.length-1];
            let artId = page[page.length-2];
            let checkArtwork = art[artId];

            if(checkArtwork) { // Check if url has necessary data to pull artwork api & that it exists/matches. If it does, do not show nav.
                art.map(item => {
                    let { id } = item.sys;
                    if(slug === id) nav = null;
                });
            } else nav = <Nav tags={tags}/> // if you cant pull art data, show nav
        } 
        else if(param) nav = null; // If you're on the  [...param] component don't show nav. Aka about/contact pages
        else nav = <Nav tags={tags}/> // If you're on home page or anywhere else, show nav.
        return nav;
    }
    
    const toggleNav = checkIfInPages(pathname, query);

    return <>{toggleNav}</>;
}

const Header = ({ data, tags, pages }) => {
    return (
        <>
        <header className={style.banner}>
            <Hero pages={pages}/>
        </header>
        <ToggleNav art={data.art} tags={tags} />
        </>
    )
}

export default Header;