import { useRouter } from 'next/router';
import Head from 'next/head';

const PrevLink = (props) => {
    let { albumId, id, title, url, thumbnailUrl } = props.prev;

    return <a href="#">Previous Art</a>;
}

const NextLink = (props) => {
    let { albumId, id, title, url, thumbnailUrl } = props.next;
    return <a href="#">Next Art</a>;
}


const ShowPage = (props) => {
    const art = props.art;
    const router = useRouter();
    const { show, albumId, id, title, url, thumbnailUrl } = router.query;
    let prev;
    let next;
    const findNodes = (obj) => {
        let nodes = [ {'prev': art[obj-2]}, {'next': art[obj]} ];
        nodes.map( lnk => { if (lnk.prev) prev = lnk.prev; else if (lnk.next) next = lnk.next; });
    }
    findNodes(id);

    return (
        <>
            <Head><title>Dynamic Page {title}</title></Head>
            <section>
                <h1>{title}</h1>
                <figure>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={url} alt={title} />
                    </a>
                </figure>
                <aside>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </aside>
                {prev && <PrevLink prev={prev} /> } {next && <NextLink next={next} /> }
            </section>
        </>
    )   
}

export default ShowPage;