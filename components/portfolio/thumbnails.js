import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';


// =======================
// PORTFOLIO'S THUMBNAILS ARE GENERATED & FILTERED OUT HERE
// =======================
const Thumbnails = ({ art }) => { 
    const router = useRouter();
    const pathname  = router.query.page;
    const artList = [];

    // =======================
    // DECIDE TO LIST ALL THUMBNAILS OR FILTER DEPENDING ON PAGE
    // =======================
    const filterThumbnails = (category, thumbnail, i) => {
        let card = <div className={style.card} key={i}>{thumbnail}</div>;
        if(pathname) {
            let slug = pathname[pathname.length-1];
            let hasTag = category.includes(slug);
            if(hasTag) return card;
        } 
        else return card;
    }
    
    // =======================
    // CREATE THUMBNAILS 
    // =======================
    const generateThumbnails = (art, list) => {
        // Loop through all art, push into array
        art.map((img, i) => list.push(img));
        const thumbnails = list.map((thumb, i) => { 
            let { artWork, category } = thumb.fields;
            let { id } = thumb.sys;

            // Loop through arrayed artwork & create thumbnail images with Contentful API
            let thumbArt = artWork.map((entry, j) => {
                let { title } = entry.fields;
                let { url } = entry.fields.file;
                const ratio = "?fit=thumb&f=face&h=400&w=400";
                const thumbnail = `${url}${ratio}`; 
                if(j < 1) { 
                    return ( 
                    <Link href={`/art/${i}/${id}`} key={id}> 
                        <a><img src={thumbnail} alt={title} className={style.thumbnail}/></a>
                    </Link> )
                }
            });
            return filterThumbnails(category, thumbArt, i);
       });
        // Thumbnails generated here
       return <>{thumbnails}</>
    }
    return generateThumbnails(art, artList);
}

export default Thumbnails;