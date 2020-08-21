import { useRouter } from 'next/router';
import FilteredArt from '../portfolio/filteredArt';
import ShowArt from '../portfolio/showArt';
import Redirect from '../redirect';

const Portfolio = (props) => {
    const art = props.art;
    const artt = props.art.artPieces;
    const router = useRouter();
    const MainPgId = router.query.page;
    const slug = MainPgId[MainPgId.length-1];
    let artEntryId;
    const getEntryIds = () => {
        artt.map(entry => {
            let { id } = entry.sys;
            if(slug === id) artEntryId = id;
        });
        return artEntryId;
    }
    getEntryIds();
    const existingArt = art.artWork[slug];

    return (
        <>
            { (slug === 'art') ? <Redirect /> :
            (existingArt && !artId) ? <FilteredArt art={art} /> :
            (slug && artEntryId) ? <ShowArt art={art} /> :
            <h1>Go Back home or 404</h1> }
        </>
        )
    }

export default Portfolio;