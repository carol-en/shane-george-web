import style from './header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from './nav';

// =======================
// MAIN CONTENT FOR HEADER
// =======================
const Header = ({ data, tags, pages }) => {
    let { art } = data;
    return (
        <>
        <header className={style.banner}>
            <Pages pages={pages} />
            <Shane href="/">Shane George</Shane>
        </header>
        <Nav tags={tags} art={art} />
        </>
    )
}

// =======================
// CREATES PAGE LINKS
// =======================
const Pages = ({ pages }) => {
    // Pulls Contentful API data for pages & generates links
    const generateLinks = (pages) => {
        let links = pages.map((link, i) => {
         let { slug, title } = link.fields;  
         return (
             <Link key={i} href={`/p/${slug}`}>
                 <a className={style.links}>{title}</a>
             </Link>
             );
        });
         return <nav className={style.nav}>{links}</nav>
     }
    return generateLinks(pages);
}

const Shane = ({ children, href }) => {
    return (
        <aside className={style.hero}>
            <span className={style.subheader}>illustrator</span>
            <h1>
                <Link href={href}>
                    <a className={style.logo}>{children}</a>
                </Link>
            </h1>
            <span className={style.subheader}>comic artist</span>
        </aside>
    )
}


export default Header;