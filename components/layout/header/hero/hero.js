import style from './hero.module.scss';
import Link from 'next/link';
import ShaneLogoLink from './shaneLogoLink';
import { useRouter } from 'next/router';

const PageLinks = ({ entryList }) => {

    const pgLnks = entryList.map(link => {
        let { userId, id, title, body } = link;
    return  <Link href={`/p/${id}`}><a key={id} class={style.links}>{title}</a></Link>
    });

    return <nav class={style.nav}> {pgLnks} </nav>
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

    // Create Contentful account to populate real data
    //  Check docs to merge NextJS and Contentful

    return (
        <>
        <PageLinks entryList={entryList} />
        <ShaneLogoLink />
        </>
    )
}

export default Hero;

