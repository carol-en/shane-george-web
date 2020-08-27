import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// =======================
// CHECK IS ENTRY EXISTS BEFORE RENDERING
// =======================
const ShowPage = ({ art }) => {
    const router = useRouter(); 
    const params = router.query.page; // Get all params
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
        }
    }

    checkEntryData(slugNum, art);

    return <> {entry ? <Content prev={prev} next={next} entry={entry} /> : <h1>404 Not Found</h1> } </>
}

// =======================
// RENDER SHOW CONTENT
// =======================
const Content = ( {prev, next, entry }) => {
    let { title, artWork } = entry.fields;
    return (
        <>
            <Head><title>{title}</title></Head>
            <section>
                    <Image image={artWork} />
                    <DescAndInfo entry={entry} />
                
                    {/* Prev & Next art links */}
                    {prev && <PrevLink prev={prev} /> } 
                    {next && <NextLink next={next} /> }
            </section>
        </>
    )
}
// =======================
// RENDER ARTWORK IMAGE
// =======================
const Image = ({ image }) => {
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
    return <figure>{imge}</figure>
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
        <aside>
            <h1>Title: {title}</h1>
            <h2>Category: {tags}</h2>
            <section className="description">{content}</section>
        </aside>
    )
}
// =======================
//  PAGINATION 
// =======================

    // Link to previous art component
    const PrevLink = ({ prev }) => {
        let { id } = prev.data.sys;
        let i = prev.arr;

        return <Link href={`/art/${i}/${id}`}><a>Previous Art</a></Link>;
    }

    // Link to next art component
    const NextLink = ({ next }) => {
        let { id } = next.data.sys;
        let i = next.arr;

        return <Link href={`/art/${i}/${id}`}><a>Next Art</a></Link>;
    }

export default ShowPage;