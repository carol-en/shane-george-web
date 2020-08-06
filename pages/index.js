import AllArt from '../components/portfolio/allArt';
import { useEffect, useState } from 'react';
import { isResSent } from 'next/dist/next-server/lib/utils';
const { createClient } = require("contentful");
  
// https://vercel.com/guides/deploying-next-and-contentful-with-vercel
// https://reactjs.org/docs/hooks-state.html

const IndexPage = (props) => {
    const art = props.artWork;

    const [artt, setArt] = useState([]);

useEffect( () => {
  async function getArt() {
    allArtt = await setArt([...props.artEntries]);
  }
  getArt();
}, []);

    return <> <AllArt art={art}/> </>
}

export default IndexPage;