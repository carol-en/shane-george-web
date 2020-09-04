import style from './header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from './nav';

// =======================
// MAIN CONTENT FOR HEADER
// =======================
const Header = ({ data, tags, pages }) => {
    let { art } = data;
    return <ToggleHeader art={art} tags={tags} pages={pages}/>
}

const HeadComponent = ({ art, tags, pages }) => {
    const router = useRouter();
    const { param } = router.query;
    
    return (
        <>
        <header className={style.banner}>
            <Pages pages={pages} />
            <Shane href="/">Shane George</Shane>
        </header>
        {!param && <Nav tags={tags} art={art} />}
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
            <h2 className={style.subheader}>illustrator</h2>
            <h1 className={style.logo}>
                <a href={href}>{children}</a>
            </h1>
            <h2 className={style.subheader}>comic artist</h2>
        </aside>
    )
}

//=================
// HIDE/SHOW TAGS NAVIGATION DEPENDING ON PAGE
//=================
const ToggleHeader = ({ art, tags, pages }) => {
    const router = useRouter();
    const { query, pathname, route } = router;
    let slug;
  
    // Determine what page you're on
    const checkIfInPages = (pathname, query) => {
        let { page, param } = query;
        let header =  <HeadComponent art={art} tags={tags} pages={pages} />;

            if(pathname !== '/' && page) { // If you're not on the home page, but on the [...page] component. Aka show page.
                slug = page[page.length-1];
                let artId = page[page.length-2];
                let checkArtwork = art[artId];
    
                if(checkArtwork) { // Check if url has necessary data to pull artwork api & that it exists/matches. If it does, do not show header.
                    const artPath = page.includes('art');
                    let { id } = checkArtwork.sys;
                    
                    if(slug === id && artPath) header = null;
                    else return header; // If slug & art id don't match, show header
                } else return header  // If you cant pull art data, show header
            } 
            else if(param) return header; // If you're on the  [...param] component don't show header. Aka about/contact pages
            else return header;
        }
    
    const toggleHeader = checkIfInPages(pathname, query);
    return <>{toggleHeader}</>;
}


export default Header;