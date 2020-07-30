import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '../../components/layout/nav';
import Redirect from '../redirect';
import style from './portfolio.module.scss';

const Link = ({ children, data, href }) => {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault();
        router.push({ 
            pathname: href,
            query: data
        });
    }

    return <a onClick={handleClick}>{children}</a>
    
}

const Thumbnails = (props) => {
    const art = props.art;
    let filterart = props.filterart;
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
        artWork = artList.map((thumb) => {
            let { id, thumbnailUrl, url, title, albumId } = thumb;
            return (
                <div key ={id} className={style.card}>
                    <Link data={thumb} href={`/art/${id}`}>
                        <img src={thumbnailUrl} alt={title} />
                    </Link>
                </div>
            )
        })
    };

    generateArtContent();
    return (
        <>
          <Head><title>Dynamic Page</title></Head>
          <h1>FilterArt: {filterart}</h1>
          <Nav artList={artList}/>
          {artWork}
        </>
    )
}


const FilteredArt = (props) => {
    const router = useRouter();
    const { filterart } = router.query;
    const art = props.data.data;


    if(filterart !== 'art') {
        // Content Starts Here
        return ( 
            <section className={style.port}>
                <Thumbnails art={art} filterart={filterart} />
            </section>
        )
    }
    else return <Redirect />
}

export default FilteredArt;