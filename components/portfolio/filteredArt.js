import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import style from './portfolio.module.scss';

// Generate Thumbnails
const Thumbnails = ({ art }) => {
    const router = useRouter();
    let slug = router.query.page[router.query.page.length -1];
    const artList = [];
    let thumbnails;

   // func: takes props, loops to make array, maps array to generate & return content
    const generateThumbnails = (art) => {
        for(let index in art) {
            let artTags = art[index].fields.category[0];
            if(artTags === slug) artList.push(art[index]);
        }
        const artThumbs = artList.map((thumb, i) => { 
            let { artWork } = thumb.fields;
            let { id } = thumb.sys;

            let thumbs = artWork.map((entry, j) => {
                let { title } = entry.fields;
                let { url } = entry.fields.file;
                const ratio = "?fit=thumb&f=face&h=200&w=200";
                const thumbnail = `${url}${ratio}`; 

                if(j < 1) { 
                    return (   
                        <Link href={`/art/${i}/${id}`} key={id}>
                            <a><img src={thumbnail} alt={title} /></a>
                        </Link>
                    )
                }
            });
            return  <div className={style.card} key={i}>{thumbs}</div>
       });
       thumbnails =  artThumbs;
    }

    generateThumbnails(art);
    return  <> {thumbnails} </>

}


const FilteredArt = ({ art }) => {
    const filteredArt = art.artPieces;

    return (
        <>
        <Head><title>Shane George Art</title></Head>
        <section className={style.port}>
            <Thumbnails art={filteredArt} />
        </section>
        </>
    )
}

export default FilteredArt;