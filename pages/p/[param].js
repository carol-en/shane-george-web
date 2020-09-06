import { useRouter } from 'next/router';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import style from './page.module.scss';
// =======================
// COMPONENT FOR STATIC PAGES
// =======================
const Page = ({ pages }) => {
    const router = useRouter();
    const { param } = router.query;

    // Retrieves data from Contentful API
    const getPageSlug = (entries, param) => {
        let pgSlug;
        entries.map(entry => {
            let { slug } = entry.fields;
            if(slug === param) pgSlug = slug; 
        });
        return pgSlug;
    }

   const pageSlug = getPageSlug(pages, param);
   return (
       <section className={style.content}>
           {(pageSlug) ? <Entry pages={pages} param={param}/> : <h1>404</h1>}
       </section>
   )
}

// =======================
// Takes data and generats page
// =======================
const Entry = ({ pages, param }) => {
    const generatePage = (pages, param) => {
        let article;
        pages.map(entry => {
            let { slug } = entry.fields;
            if(param === slug) article = entry;
        });
        return article;
    }
    const page = generatePage(pages, param);
    const { title, text } = page.fields;

     // Render rich text embedded images
     const EmbeddedImage = ({ title, url }) =>
     (
       <figure>
           <a href={url} target="_blank" rel="noopener noreferrer"><img src={`${url}?w=200`} alt={title} /></a>
       </figure>
     );

     // Set custom options to render embedded blocks: images & entries
     const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { title, file } = node.data.target.fields;
            const { url } = file;

            return <EmbeddedImage title={title} url={url}/>
          }
        }
      };
      const content = documentToReactComponents(text, options);
    return (
        <>
            <h1 className={style.title}>{title}</h1>
            {content}
        </>
    );
}

export default Page;