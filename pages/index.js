import AllArt from '../components/portfolio/allArt';
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
const { createClient } = require("contentful");

const contentfulClient = createClient({
        space: "6jizbkvr12of",
        accessToken: "L60lNNHrqGGj8Y3zXd-cnI58eWKKwwcSCxyt1Z9Pm2Q"
  })
  

const IndexPage = (props) => {

    const getEntry = async (entryId) => {
        const entries = await contentfulClient.getEntries();
        if (entries.items) return entries.items;
        console.log(`Error getting Entries for ${contentType.name}.`)
      }
      
      console.log(getEntry());

    const art = props.artWork;
    return <> <AllArt art={art} /> </>
}

export default IndexPage;