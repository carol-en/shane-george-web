import { useRouter } from 'next/router';
import FilterArt from '../portfolio/filterArt';
import ShowArt from '../portfolio/showArt';
import Redirect from '../redirect';
import Custom404 from '../../pages/404';

// =======================
// HANDLES ROUTING FOR PORTFOLIO GALLERIES
// =======================
const Portfolio = ( { art, tags }) => {
    const router = useRouter();
    const params = router.query.page;
    const { pathname } = router;
    let slug;

    
    // Check if path is home or not
    const isHomePage = (path) => {
        if(path !== '/') slug = params[params.length-1];
        else slug = null;
    }

    // Map through art data, if an art entry exists then return it's id 
    const getArtworkId = (art) => {
        let artId;
        art.map(item => {
            let { id } = item.sys;
            if(slug === id) {
                artId = id;
            }
        });
        return artId;
    }

    isHomePage(pathname);
    
    // Go to one of these depending on path
    const tagsSlug   =  tags.includes(slug),
          showSlug   =  getArtworkId(art),
          homeSlug   =  pathname === '/',
          artSlug    =  slug === 'art';

    return (
        <>
        {   (homeSlug)  ?   <FilterArt   art={art} />  :  // if you're on home page
            (artSlug)   ?   <Redirect />               :  // if url is only at '/art', redirect home
            (tagsSlug)  ?   <FilterArt   art={art} />  : // if you're on a tagged art pg
            (showSlug)  ?   <ShowArt     art={art} />  : // if you're viewing a piece of art
            <Custom404 /> // if no page exists 
        } 
        </>
        )
    }

export default Portfolio;