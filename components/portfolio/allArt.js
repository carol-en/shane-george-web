import { useRouter } from 'next/router';
import Head from 'next/head';
import style from './portfolio.module.scss';


const Link = ({ children, data, href }) => {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault();
        console.log(data)
        router.push({ 
            pathname: href,
            query: data
        });
    } 
    return <a onClick={handleClick}>{children}</a>  
}

const Thumbnails = (props) => {
    const art = props.art;   
    const artList = [];
    for(let index in art) if(index <= 100) artList.push(art[index]);
    const artWork = artList.map(thumb => { 
        let { id, thumbnailUrl, url, title, albumId } = thumb;
        return (
            <div key ={id} className={style.card}>
                <Link data={thumb} href={`/art/${id}`}>
                    <img src={thumbnailUrl} alt={title} />
                </Link>
            </div>
        )
   });

    return <> {artWork} </>
}


function allArt(props) {
    const router = useRouter();
    const art = props.art;
    return (
        <>
        <h1>AllArt</h1>
        <Head><title>Portfolio Component!</title></Head>
        <section className={style.port}>
            <Thumbnails art={art}  />
        </section>
        </>
    )
}

export default allArt;