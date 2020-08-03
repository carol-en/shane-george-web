import AllArt from '../components/portfolio/allArt';
import Nav from '../components/layout/nav';

const IndexPage = (props) => {
    const art = props.artWork;

    return ( 
    <>
        <Nav art={art} />
        <AllArt art={art} />
    </>
    )
}

export default IndexPage;