import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Nav from '../../components/layout/nav';
import style from './filter.module.scss';


const ArtWork = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const art = props;
    const artList = [];
    let artWork;

    // func: takes props, loops to make array, maps array to generate & return content
    const generateArtContent = () => {
        // loop data then push into artList
        for(let index in art) {  
            let artAlbumId = art[index].albumId;
            let paramsId = parseInt(id,10);
            // if album id matchs url id
            if(artAlbumId ===  paramsId) artList.push(art[index]);
        }
        // map artList array and add into content
        artWork = artList.map(art => {  
            return (
                <div key ={art.id} className={style.card}>
                        <a href={art.url} target="_blank" noreferrer="true">
                            <img src={art.thumbnailUrl} alt={art.title} />
                        </a>
                </div>
            )
        })
    };
    
    generateArtContent(); // call function to create it

  return(
    <Layout>
        <Head><title>Dynamic Page</title></Head>
        <Nav artList={artList}/>
        <h1>Post: {id}</h1>
        <h1>This is a Dynamic Page</h1>
        <section className={style.port}>
            {artWork}
        </section>

    </Layout>
    )
}

ArtWork.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return data;
}

export default ArtWork;