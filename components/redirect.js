import { useRouter } from 'next/router';

const Redirect = ({ cxt }) => {
    const router = useRouter();
    if (typeof window !== 'undefined') router.push('/');
    return null;
}

Redirect.getInitialProps = (cxt) => {
    if(cxt.res) {
        cxt.res.writeHead(302, {Location: '/'});
        cxt.res.end();
    }
    return { };
}

export default Redirect;