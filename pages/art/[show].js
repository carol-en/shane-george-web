import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '../../components/layout/nav';

const PrevLink = (props) => {
    const nodes = props.nodes;
    let prev;
    nodes.map( lnk => { if(lnk.prev) prev = lnk.prev; });
    let { albumId, id, title, url, thumbnailUrl } = prev;
    return <a href="#">{title}</a>;
}

const NextLink = (props) => {
    const nodes = props.nodes;
    let next;
    nodes.map( lnk => { if(lnk.next) next = lnk.next; });
    let { albumId, id, title, url, thumbnailUrl } = next;
    return <a href="#">{title}</a>;
}


const ShowPage = (props) => {
    const router = useRouter();
    const { show, albumId, id, title, url, thumbnailUrl } = router.query;
    let nodes;

    const findNodes = (obj) => {
        nodes = [ {'prev': props[obj-2]}, {'next': props[obj]} ];
    }
    
    findNodes(id);

    return (
        <>
        <Nav data={props} />
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
                <PrevLink nodes={nodes} />
                <NextLink nodes={nodes} />
            </section>
        </>
    )   
}

export default ShowPage;