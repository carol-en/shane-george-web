import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';


// https://www.dwuser.com/education/content/creating-responsive-tiled-layout-with-pure-css/
// FOR GRID GALLERY

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
    const filterThumbnails = (category, img, i) => {
        let thumbnail = <div className={style.thumbnail} key={i}>{img}</div>;
        if(pathname) {
            let slug = pathname[pathname.length-1];
            let hasTag = category.includes(slug);
            if(hasTag) return thumbnail;
        } 
        else return thumbnail;
    }
    
    // =======================
    // CREATE THUMBNAILS 
    // =======================
    const generateThumbnails = (art, list) => {
        // Loop through all art, push into array
        art.map((img, i) => list.push(img));
        const thumbnails = list.map((thumb, i) => { 
            let { artWork, category } = thumb.fields;
            let entryTitle = thumb.fields.title;
            let { id } = thumb.sys;

            // Loop through arrayed artwork & create thumbnail images with Contentful API
            let thumbArt = artWork.map((entry, j) => {
                let { title } = entry.fields;
                let { url } = entry.fields.file;
                const ratio = "?fit=thumb&f=face&w=600&h=600";
                const thumbnail = `${url}${ratio}`; 
                if(j < 1) { 
                    return (
                        <Link href={`/art/${i}/${id}`} key={id}> 
                         <a className={style.project}>
                            <img src={thumbnail} alt={title}/>
                            <span className={style.proj_name}>{entryTitle}</span>    
                         </a>
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