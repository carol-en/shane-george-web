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
    const PrevLink = ({ prev }) => {
        let { id } = prev.data.sys;
        let i = prev.arr;
        
        return <Link href={`/art/${i}/${id}`} data={prev}>Previous Art</Link>;
    }

    // Link to next art component
    const NextLink = ({ next }) => {
        let { id } = next.data.sys;
        let i = next.arr;

        return <Link href={`/${i}/art/${id}`} data={next}>Next Art</Link>;
    }

export { Link, PrevLink, NextLink };