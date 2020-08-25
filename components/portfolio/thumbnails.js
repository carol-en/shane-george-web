import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';

const Thumbnails = ({ art }) => { 
    const router = useRouter();
    const pathname  = router.query.page;
    // let slug = router.query.page[router.query.page.length -1];
    const artList = [];
    let thumbnails;


    const filterArtWork = (art) => {
        for(let i in art) {
            if(pathname) {
                let slug = pathname[pathname.length -1];
                let hasTags = art[i].fields.category.includes(slug);
                if(hasTags) artList.push(art[i]);
            }
            else artList.push(art[i]);
        }
    }

    const generateThumbnails = (art) => {
        
        filterArtWork(art);

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

    return <>{thumbnails}</>
}

export default Thumbnails;