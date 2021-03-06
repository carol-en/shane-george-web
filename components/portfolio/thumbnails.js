import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';
import Custom404 from '../../pages/404';

// =======================
// PORTFOLIO'S THUMBNAILS ARE GENERATED & FILTERED OUT HERE
// =======================
const Thumbnails = ({ art }) => { 
    const router = useRouter();
    const { query, route, pathname } = router;
    const { page } = query;
    const artList = [];


    // =======================
    // DECIDE TO LIST ALL THUMBNAILS OR FILTER DEPENDING ON PAGE
    // =======================
    const filterThumbnails = (category, img, i) => {
        let thumbnail = <div className={style.thumbnail} key={i}>{img}</div>;
        if(page) {
            let slug = page[page.length-1];
            let artPath = page.includes('art');
            let hasTag = category.includes(slug);
            if(artPath && hasTag) return thumbnail;
        } 
        else return thumbnail;
    }
    
    // =======================
    // CREATE THUMBNAILS 
    // =======================
    const generateThumbnails = (art, list) => {
        // Loop through all art, push into array
        art.map((img, i) => list.push(img));
        const allArt = list.map((thumb, i) => { 
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
                            <h3 className={style.proj_name}>{entryTitle}</h3>    
                         </a>
                        </Link> )
                }
            });
            return filterThumbnails(category, thumbArt, i);
       });
        // Thumbnails generated here
        const thumbnails = allArt.reverse();
       return <>{thumbnails}</>
    }
    // =======================
    // CHECK IF URL IS IS CORRECT 
    // =======================
    const checkRouting = () => {
        if(route === '/') { // If route is at home route
            return generateThumbnails(art, artList);
            } 
        else if(pathname) { // if route is at [...params] component
            const artPath = page.includes('art');
            // check if /art/ is correct or not
            if(artPath)  return generateThumbnails(art, artList);    
            else if(!artPath) return <Custom404 />
        }      
    }
    // Checking routing, everything else generates after checking routing
    const fillThumbnails = checkRouting();

    return fillThumbnails;
}

export default Thumbnails;