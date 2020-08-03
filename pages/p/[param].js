import { useRouter } from 'next/router';

const Pages = (props) => {
    const router = useRouter();
    const { param } = router.query;

    return <h1>title: {param}</h1>
}

export default Pages;