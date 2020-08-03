import { useRouter } from 'next/router';


const Link = ({ children, href, data }) => {
    const router = useRouter();

    const handleClick = e => {
        e.preventDefault();
        router.push({
            pathname: href,
            query: data
        });
    }
    return <a onClick={handleClick}>{children}</a>
}

    // Link to previous art component
    const PrevLink = (props) => {
        let { id } = props.prev;
        return <Link href={`/art/${id}`} data={props.prev}>Previous Art</Link>;
    }

    // Link to next art component
    const NextLink = (props) => {
        let { id } = props.next;
        return <Link href={`/art/${id}`} data={props.next}>Next Art</Link>;
    }

export { Link, PrevLink, NextLink };