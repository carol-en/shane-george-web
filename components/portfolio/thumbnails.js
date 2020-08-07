import Link from 'next/link';
import style from './portfolio.module.scss';
import { useRouter } from 'next/router';

const Thumbnails = (props) => { 
    const router = useRouter();
    let { pathname } = router;
    const art = props.art;
    const artList = [];
    let thumbnails;


    const generateThumbnails = () => {
        for(let index in art) artList.push(art[index]);
        const artThumbs = artList.map((thumb, i) => { 
            let { artWork } = thumb.fields;
    
            let thumbs = artWork.map((entry, i) => {
                let { title } = entry.fields;
                let { url } = entry.fields.file;
                let { id } = entry.sys;
                const ratio = "?fit=thumb&f=face&h=200&w=200";
                const thumbnail = `${url}${ratio}`; 

                if(i < 1) {
                    return (   
                        <Link href={`/art/${id}`} key={id}>
                            <a><img src={thumbnail} alt={title} /></a>
                        </Link>
                    )
                }
            });
            return  <div className={style.card} key={i}>{thumbs}</div>
       });
       thumbnails =  artThumbs;
    }
    generateThumbnails();

    if(pathname === '/') return <>{thumbnails}</>
}

export default Thumbnails;