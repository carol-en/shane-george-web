import { useRouter } from 'next/router';
import Nav from '../layout/nav';
import AllArt from '../portfolio/allArt';
import FilteredArt from '../portfolio/filteredArt';
import ShowArt from '../portfolio/showArt';
import Redirect from '../redirect';

const Portfolio = (props) => {
    const art = props.art;
    const router = useRouter();
    const MainPgId = router.query.page;
    const slug = MainPgId[MainPgId.length-1];
    const numSlug = Number(slug);
    const existingArt = art[numSlug];
    const artId = router.query.id;
    
    return (
        <>
        <Nav art={art}/>
        { (slug === 'art') ? <AllArt art={art} /> :
        (existingArt && !artId) ? <FilteredArt art={art} /> :
        (artId) ? <ShowArt art={art} /> :
        <h1>Go Back home or 404</h1> }
        </>
        )
    }

export default Portfolio;