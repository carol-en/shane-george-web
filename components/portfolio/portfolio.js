import AllArt from './allArt';
import FilteredArt from './filteredArt';
import { useRouter } from 'next/router';

const Portfolio = (props) => {
    const art = props.data;
    const router = useRouter();
    const id = router.pathname;
    const filterId = Number(router.query.filterart);
    const existingArt = art[filterId];

    if(id === '/') return <AllArt art={art} />
    else if (existingArt) return <FilteredArt art={art} />
    else return <h1>404 Does not exist!</h1>
}

export default Portfolio;