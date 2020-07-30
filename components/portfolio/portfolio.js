import AllArt from './allArt';
import FilteredArt from './filteredArt';
import { useRouter } from 'next/router';

const Portfolio = (props) => {
    const router = useRouter();
    const id = router.pathname;
    const filterId = router.query.filterart;
    const art = props.data;

    if(id === '/') return <AllArt data={props} />
    else if (filterId) return <FilteredArt data={props} />
}

export default Portfolio;