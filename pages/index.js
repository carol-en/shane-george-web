import AllArt from '../components/portfolio/allArt';

  
// https://vercel.com/guides/deploying-next-and-contentful-with-vercel
// https://reactjs.org/docs/hooks-state.html

const IndexPage = (props) => {
    const art = props.artWork;

// console.log('index.js ', props)

    return <> <AllArt art={art} artWork={props.artPieces} /> </>
}

export default IndexPage;