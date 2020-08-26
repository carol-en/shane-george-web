import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';

const Thumbnails = ({ art }) => { 
    const router = useRouter();
    const pathname  = router.query.page;
    const artList = [];

    const filterThumbnails = (category, thumbnail, i) => {
        let card = <div className={style.card} key={i}>{thumbnail}</div>;
        if(pathname) {
            let slug = pathname[pathname.length-1];
            let hasTag = category.includes(slug);
            if(hasTag) return card;
        } 
        else return card;
    }
    
    const generateThumbnails = (art, list) => {
        art.map((img, i) => list.push(img));
        const thumbnails = list.map((thumb, i) => { 
            let { artWork, category } = thumb.fields;
            let { id } = thumb.sys;

            let thumbArt = artWork.map((entry, j) => {
                let { title } = entry.fields;
                let { url } = entry.fields.file;
                const ratio = "?fit=thumb&f=face&h=200&w=200";
                const thumbnail = `${url}${ratio}`; 
                if(j < 1) { 
                    return ( 
                    <Link href={`/art/${i}/${id}`} key={id}> 
                        <a><img src={thumbnail} alt={title} /></a>
                    </Link> )
                }
            });
            return filterThumbnails(category, thumbArt, i);
       });
       return <>{thumbnails}</>
    }
    return generateThumbnails(art, artList);
}

export default Thumbnails;