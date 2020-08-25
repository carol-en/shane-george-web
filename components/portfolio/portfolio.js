import { useRouter } from 'next/router';
import FilteredArt from '../portfolio/filteredArt';
import ShowArt from '../portfolio/showArt';
import Redirect from '../redirect';

const Portfolio = ( { art }) => {
    let { artPieces, tagsList } = art;
    const router = useRouter();
    const paramId = router.query.page;
    const slug = paramId[paramId.length-1];
    const artId = artPieces.map(entry => {
            let { id } = entry.sys;
            if(slug === id) id;
        });

    return (
        <>
            { (slug === 'art') ? <Redirect /> :
            (tagsList.includes(slug)) ? <FilteredArt art={art} /> :
            (slug && artId) ? <ShowArt art={art.artPieces} /> :
            <h1>Go Back home or 404</h1> }
        </>
        )
    }

export default Portfolio;