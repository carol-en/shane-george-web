import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';

const Thumbnails = ({ art }) => { 
    const router = useRouter();
    let { pathname } = router;
    const artList = [];
    let thumbnails;


    const generateThumbnails = (art) => {
        for(let index in art) artList.push(art[index]);
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

    return (
        <>{thumbnails}</>
    )

}

export default Thumbnails;