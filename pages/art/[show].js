import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../../components/layout/nav';

const NavigateBtns = (props) => {
    let nodes = props.nodes;

    // Map them.
    // Code out show page.

    return   <h3>NavigateBtns: {nodes[1].next.title}</h3>;
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
            <Head><title>Dynamic Page {title}</title></Head>
            <section>
                <h1>{show}: Dynamic Show Page!</h1>
                <ul>
                    <li>{id}</li>
                    <li>{albumId}</li>
                    <li>{title}</li>
                    <li>{url}</li>
                    <li>{thumbnailUrl}</li>
                </ul>
                <NavigateBtns nodes={nodes} />
            </section>
        </>
    )   
}

export default ShowPage;