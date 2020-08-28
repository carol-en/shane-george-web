import Portfolio from '../components/portfolio';
import { useRouter } from 'next/router';

const IndexPage = ({ art, tagsList  }) => {

    return <Portfolio art={art} tags={tagsList} />
}

export default IndexPage;