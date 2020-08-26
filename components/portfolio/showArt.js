import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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

const Content = ( {prev, next, entry }) => {
    let { title, artWork } = entry.fields;
    return (
        <>
            <Head><title>{title}</title></Head>
            <section>
                    <Artwork artWork={artWork} />
                    <DescAndInfo entry={entry} />
                
                    {/* Prev & Next art links */}
                    {prev && <PrevLink prev={prev} /> } 
                    {next && <NextLink next={next} /> }
            </section>
        </>
    )
}

const Artwork = ({ artWork }) => {
    let art = artWork.map(art => {
        let { fields, sys } = art;
        let { id } = sys;
        let { title, file } = fields;
        let { url } = fields.file;

        return(
            <a href={url} target="_blank" rel="noopener noreferrer" key={id}>
                <img src={url} alt={title} />
            </a>
        )
    })
    return <figure>{art}</figure>
}

const DescAndInfo = ({ entry }) => {
    let { title, category, description } = entry.fields;
    let document;
    let allText = description.content.map(txt => document = txt);
    const Bold = ({ children }) => <strong>{children}</strong>;
    const Italic = ({ children }) => <em>{children}</em>;
    const Underline = ({ children }) => <u>{children}</u>;
    const Code = ({ children }) => <pre>{children}</pre>;
    const Text = ({ children }) => <p>{children}</p>;

    console.log(document)

    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
          [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
          [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
          [MARKS.CODE]: text => <Code>{text}</Code>
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        },
        renderText: text => text.replace('!', '?'),
      };

      const entryData = documentToReactComponents(document, options);

    return (
        <aside>
            <h1>Title: {title}</h1>
            <h2>Category: {category.map(tag => tag)}</h2>
            <section className="description">{entryData}</section>
        </aside>
    )
}

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