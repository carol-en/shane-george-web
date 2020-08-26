import { useRouter } from 'next/router';
import FilterArt from '../portfolio/filterArt';
import ShowArt from '../portfolio/showArt';
import Redirect from '../redirect';

const Portfolio = ( { art, tags }) => {
    const router = useRouter();
    const params = router.query.page;
    const { pathname } = router;
    let slug;

    const artId = art.map(entry => {
            let { id } = entry.sys;
            if(slug === id) id;
        });

    const isHomePage = (path) => {
        if(path !== '/') slug = params[params.length-1];
        else return;
    }
    
    isHomePage(pathname);

    return (
        <>
            {(pathname === '/') ? <FilterArt art={art} /> : 
            (slug === 'art') ? <Redirect /> :
            (tags.includes(slug)) ? <FilterArt art={art} /> :
            (slug && artId) ? <ShowArt art={art} /> :
            <h1>Go Back home or 404</h1> }
        </>
        )
    }

export default Portfolio;