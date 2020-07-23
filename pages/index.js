import Head from 'next/head';
import Link from 'next/link';
import Portfolio from '../components/portfolio';
import fetch from 'isomorphic-unfetch';


const Root = (props) => {
 return(
    <>
        <Head><title>Home Page</title></Head>
            <h1>Home Page</h1>
            <Portfolio photos={props}/>
    </>
    )
}

export default Root;