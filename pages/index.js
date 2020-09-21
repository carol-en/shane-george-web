import Portfolio from '../components/portfolio';

const IndexPage = ({ art, tagsList  }) => {
    return <Portfolio art={art} tags={tagsList} />
}

export default IndexPage;