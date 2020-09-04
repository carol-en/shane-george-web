import { useRouter } from 'next/router';
import Link from 'next/link';
import Custom404 from '../../pages/404';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import style from './portfolio.module.scss';

// =======================
// CHECK IS ENTRY EXISTS BEFORE RENDERING
// =======================
const ShowPage = ({ art }) => {
    const router = useRouter(); 
    const { query, route, pathname } = router;
    const { page } = query;
    const params = page; // Get all params
    const slug = params[params.length-1]; // Get id params
    const slugNum = Number(params[1]); // Get Index of entry from params
    let prev;
    let next;
    let entry;
    const checkEntryData = (i, art) => { // Check if entry exists
        if(art[i]) { // if this entry exists
            let entryId = art[i].sys.id; // get entry's id
            if(slug === entryId) { //check of slug id matches entry id
                entry = art[i];
                // if next item exists, save it
                if(art[i + 1]) next = { 'data': art[i + 1], 'arr': i + 1 }; 
                // if previous item exists, save it
                if(art[i - 1]) prev = { 'data': art[i - 1], 'arr': i - 1 }; 
            }
            else entry = null;
        }
    }

    const checkRouting = () => {
        if(pathname) { // if route is at [...params] component
            const artPath = page.includes('art');
            // check if /art/ is correct or not
            if(artPath)  checkEntryData(slugNum, art);   
            else if(!artPath) return <Custom404 />
        }      
    }

    checkRouting();
    
    return (
    <> 
    {entry ? <Content prev={prev} next={next} entry={entry} /> : <Custom404 />}
    </>
    )
}

// =======================
// RENDER SHOW CONTENT
// =======================
const Content = ( {prev, next, entry }) => {
    const router = useRouter(); 
    let { title, artWork } = entry.fields;

    return (
        <section className={style.content}>
            <aside className={style.row}>
                <a onClick={() => router.back()}>return</a>
                <a href="/">X</a>
            </aside>

            <aside className={style.pagi_links}>
                {prev && <PrevLink prev={prev}/>} 
                {next && <NextLink next={next} />}
            </aside>

            <Image image={artWork} entry={entry} />

        </section>
    )
}
// =======================
// RENDER ARTWORK IMAGE
// =======================
const Image = ({ image, entry }) => {
    let imge = image.map(art => {
        let { fields, sys } = art;
        let { id } = sys;
        let { title, file } = fields;
        let { url } = fields.file;

        return (
            <a href={url} target="_blank" rel="noopener noreferrer" key={id}>
                <img src={url} alt={title} />
            </a>
        )
    })
    return (
        <aside className={style.artwork}>
            <figure> 
                {imge}
            </figure>
            <DescAndInfo entry={entry} />
        </aside>
        )
}

// =======================
// RENDER RICH TEXT CONTENT
// =======================
const DescAndInfo = ({ entry }) => {
    let { title, category, description } = entry.fields;
    const tags = category.map(tag => tag);

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
      const content = documentToReactComponents(description, options);

    return (
        <div className={style.show_data}>
            <h1>Title: {title}</h1>
            <h2>Category: {tags}</h2>
            <span className={style.description}>{content}</span>
        </div>
    )
}
// =======================
//  PAGINATION 
// =======================

    // Link to previous art component
    const PrevLink = ({ prev }) => {
        let { id } = prev.data.sys;
        let i = prev.arr;

        return <Link href={`/art/${i}/${id}`}><a className={style.prev}>Previous Art</a></Link>;
    }

    // Link to next art component
    const NextLink = ({ next }) => {
        let { id } = next.data.sys;
        let i = next.arr;

        return <Link href={`/art/${i}/${id}`}><a className={style.next}>Next Art</a></Link>;
    }

export default ShowPage;