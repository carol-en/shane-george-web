import { useRouter } from 'next/router';
import Head from 'next/head';
import { Link } from './links';
import style from './portfolio.module.scss';

// Generate Thumbnails
const Thumbnails = (props) => {
    const art = props.art.artWork;
    let slug = props.slug;
    const artList = [];
    let artWork;

   // func: takes props, loops to make array, maps array to generate & return content
    const generateArtContent = () => {
        // loop data then push into artList
        for(let i in art) {  
            let artAlbumId = art[i].albumId;
            let paramsId = parseInt(slug,10);
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

    return  <> {artWork} </>

}


const FilteredArt = (props) => {
    const router = useRouter();
    const slug = router.query.page[router.query.page.length -1];
    const art = props.art;

        return ( 
            <>
            <Head><title>Dynamic Page</title></Head>
            <section className={style.port}>
                <Thumbnails art={art} slug={slug} />
            </section>
            </>
        )
}

export default FilteredArt;