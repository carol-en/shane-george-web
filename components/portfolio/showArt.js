import { useRouter } from 'next/router';
import Head from 'next/head';
import { PrevLink, NextLink } from './links';

const Artwork = ({ artWork }) => {
    let art = artWork.map(art => {
        let { fields, sys } = art;
        let { title, file } = fields;
        let { url } = file;
        return(
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={url} alt={title} />
            </a>
        )
    })
    return <figure>{art}</figure>
}

const ShowPage = (props) => {
    const art = props.art.artPieces;
    const router = useRouter();
    const slug = router.query.page[router.query.page.length-1];
    let prev;
    let next;
    let entryData;
    const getEntryData = () => {
        art.map((entry, i, arr) => {
            let { sys } = entry;
            let entryExists =  Object.values(sys).includes(slug);
            if(entryExists) {
                entryData = entry;
                if(arr[i + 1]) next = arr[i + 1]; // if next item exists, save it
                if(arr[i - 1]) prev = arr[i - 1]; // if previous item exists, save it
            }
            return;
        });
    }
    getEntryData();
    let { title, description, category, artWork } = entryData.fields;

//  CODE IN REST OF SHOW PAGE DATA + PREV/NEXT

    return (
        <>
            <Head><title>Dynamic Page {title}</title></Head>
            <section>
                <h1>{title}</h1>
                <Artwork artWork={artWork} />
                <aside>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </aside>
                {prev && <PrevLink prev={prev} /> } 
                {next && <NextLink next={next} /> }
            </section>
        </>
    )   
}

export default ShowPage;