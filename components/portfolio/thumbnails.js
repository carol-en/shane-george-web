import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';

const Thumbnails = ({ art }) => { 
    const router = useRouter();
    const pathname  = router.query.page;
    const allArtArr = [];
    const filterArtArr = [];
    let thumbnails;

// FIx filteirng system with the arrays and indexes
    const filterArtWork = (art, mapArt) => {
        for(let i in art) {
            if(pathname) {
                let slug = pathname[pathname.length -1];
                let hasTags = art[i].fields.category.includes(slug);
                if(hasTags) filterArtArr.push(art[i]);
                mapArt = filterArtArr;
            }
            else {
                allArtArr.push(art[i]);
                mapArt = allArtArr;
            }
            return mapArt;
        }
    }

    const generateThumbnails = (art) => {
        let mapArt;
        filterArtWork(art, mapArt);

        const artThumbs = mapArt.map((thumb, i) => { 
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