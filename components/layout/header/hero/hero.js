import style from './hero.module.scss';
import Link from 'next/link';

// =======================
// BANNER AREA FOR HEADER
// =======================
function Hero({ pages }) {    
    return (
        <>
        <Links pages={pages} />
        <ShaneLogo/>
        </>
    )
}

// =======================
// CREATES PAGE LINKS
// =======================
const Links = ({ pages }) => {

    // Pulls Contentful API data for pages & generates links
    const generateLinks = (pages) => {
        let links = pages.map((link, i) => {
         let { slug, title } = link.fields;  
         return (
             <Link key={i} href={`/p/${slug}`}><a className={style.links}>{title}</a></Link>
             );
        });
         return <nav className={style.nav}>{links}</nav>
     }
    return generateLinks(pages);
}

const ShaneLogo = () => {
    return (
        <>
            <h1><Link href="/"><a className={style.logo}>Shane George</a></Link></h1>
        </>
    )
}

export default Hero;

