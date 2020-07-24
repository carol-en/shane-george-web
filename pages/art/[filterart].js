import {useRouter} from 'next/router'
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../components/layout/nav';
import style from './filterart.module.scss';

const Thumbnails = (props) => {
    let { id, thumbnailUrl, url, title, albumId } = props.art;
    return (
        <div key ={id} className={style.card}>
            <Link href={`/art/p/${id}`}>
                <a>
                    <img src={thumbnailUrl} alt={title} />
                </a>
            </Link>
        </div>
    )
}

const ArtWork = (props) => {
    const router = useRouter();
    const { filterart } = router.query;
    const art = props;
    const artList = [];
    let artWork;

    // func: takes props, loops to make array, maps array to generate & return content
const generateArtContent = () => {
    // loop data then push into artList
    for(let i in art) {  
        let artAlbumId = art[i].albumId;
        let paramsId = parseInt(filterart,10);
        // if album id matchs url id
        if(artAlbumId ===  paramsId) artList.push(art[i]);
    }
    // map artList array and add into content
    artWork = artList.map(art => <Thumbnails art={art} /> )
};

generateArtContent();

// Content Starts Here
return(
        <>
            <Head><title>Dynamic Page</title></Head>
            <Nav artList={artList}/>
            <h1>FilterArt: {filterart}</h1>
            <h1>This is a Dynamic Page</h1>
            <section className={style.port}>
                {artWork}
            </section>
        </>
    )
}

export default ArtWork;