import AllArt from '../components/portfolio/allArt';

const IndexPage = (props) => {
    const art = props.artWork;
    return <> <AllArt art={art} /> </>
}

export default IndexPage;