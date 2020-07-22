import style from './portfolio.module.scss';
import Nav from '../../components/layout/nav';
import Link from 'next/link';


function Portfolio(props) {
    const photos = props.photos;
    const artList = [];
     for(let index in photos) if(index <= 20) artList.push(photos[index]);
    const artWork = artList.map(art => { 
        return (
            <div key = {art.id} className={style.card}>
                    <a href={art.url} target="_blank" noreferrer="true">
                        <img src={art.thumbnailUrl} alt={art.title} />
                    </a>
            </div>
        )
    });

    return (
        <>
        <Nav artList={artList}/>
        <section className={style.port}>
            <h6 className={style.folio}>Portfolio Component!</h6>
            {artWork}
        </section>
        </>
    )
}

export default Portfolio;