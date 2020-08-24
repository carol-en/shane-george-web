import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';


const ShowPage = (props) => {
    const art = props.art.artPieces; // Art props
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
    return <> {entry ? <ShowContent prev={prev} next={next} entry={entry} /> : <h1>404 Not Found</h1> } </>
}

const ShowContent = ( {prev, next, entry }) => {
    let { title, artWork } = entry.fields;
    return (
        <>
            <Head><title>{title}</title></Head>
            <section>
                    <Artwork artWork={artWork} />
                    <ArtContent entry={entry} />
                
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

const ArtContent = ({ entry }) => {
    let { title, category, description } = entry.fields;
    // Find library for markdown
    return (
        <aside>
            <h1>Title: {title}</h1>
            <h2>Category: {category.map(tag => tag)}</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
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