import Portfolio from '../components/portfolio';

const IndexPage = ({ art, tagsList  }) => {
    console.log('test');
    return <Portfolio art={art} tags={tagsList} />
}

export default IndexPage;