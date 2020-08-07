import AllArt from '../components/portfolio/allArt';

  
// https://vercel.com/guides/deploying-next-and-contentful-with-vercel
// https://reactjs.org/docs/hooks-state.html

const IndexPage = (props) => {
    const art = props.artWork;
    const artt = props.artPieces;

    return <> <AllArt art={art} artt={artt} /> </>
}

export default IndexPage;