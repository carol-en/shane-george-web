import Head from 'next/head';
import Link from 'next/link';
import Portfolio from '../components/portfolio';
import fetch from 'isomorphic-unfetch';


const Root = (props) => {
 return(
    <>
        <Head><title>Home Page</title></Head>
            <Portfolio data={props}/>
    </>
    )
}

export default Root;