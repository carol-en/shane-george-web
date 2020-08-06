import style from './hero.module.scss';
import Link from 'next/link';
import ShaneLogoLink from './shaneLogoLink';
import { useRouter } from 'next/router';

const PageLinks = ({ entryList }) => {

    const pgLnks = entryList.map(link => {
        let { userId, id, title, body } = link;
    return  <Link href={`/p/${id}`} key={id}><a className={style.links}>{title}</a></Link>
    });

    return <nav className={style.nav}> {pgLnks} </nav>
}

function Hero({ data }) {
    const router = useRouter();
    const slug = router.query.param;
    const entryList = [];
    let entryCheck;
    
    const generateLinks = () => {
        data.map((article, i) =>  { if(i < 3) entryList.push(article); });
        entryCheck = entryList[slug];
    }

    generateLinks();


    return (
        <>
        <PageLinks entryList={entryList} />
        <ShaneLogoLink />
        </>
    )
}

export default Hero;

