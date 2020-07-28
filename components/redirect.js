import { useRouter } from 'next/router';

const Redirect = () => {
    const router = useRouter();
    if (typeof window !== 'undefined') router.push('/');
    return null;
}

export default Redirect;