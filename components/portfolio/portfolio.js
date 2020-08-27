import { useRouter } from 'next/router';
import FilterArt from '../portfolio/filterArt';
import ShowArt from '../portfolio/showArt';
import Redirect from '../redirect';

// =======================
// HANDLES ROUTING FOR PORTFOLIO GALLERIES
// =======================
const Portfolio = ( { art, tags }) => {
    const router = useRouter();
    const params = router.query.page;
    const { pathname } = router;
    let slug;

    // Map through art data, if an art entry exists then return it's id
    const artId = art.map(entry => {
            let { id } = entry.sys;
            if(slug === id) id;
        });

    // Check if path is home or not
    const isHomePage = (path) => {
        if(path !== '/') slug = params[params.length-1];
        else return;
    }
    
    isHomePage(pathname);

    // Go to one of these depending on path
    return (
        <>
        {   (pathname === '/')    ?   <FilterArt   art={art} />  :  // if you're on home page
            (slug === 'art')      ?   <Redirect />               :  // if url is only at '/art', redirect home
            (tags.includes(slug)) ?   <FilterArt   art={art} />  : // if you're on a tagged art pg
            (slug && artId)       ?   <ShowArt     art={art} />  : // if you're viewing a piece of art
            <h1>Go Back home or 404</h1> // if no page exists 
        } 
        </>
        )
    }

export default Portfolio;