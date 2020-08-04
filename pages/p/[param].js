import { useRouter } from 'next/router';

const Entry = (props) => {
    const { userId, id, title, body } = props.entry;


    return (
        <>
            <h1>{id}: {title}</h1>
            <p>{body}</p>
        </>
    );
}

const Page = (props) => {
    const router = useRouter();
    const { param } = router.query;
    const posts = props.entry;
    const entryList = [];
    let entryCheck;

    const generateArticles = () => {
        posts.map((article, i) =>  { if(i < 10) entryList.push(article); });
        entryCheck = entryList[param];
    }

    generateArticles();

    return (
        <>
            <section>
                {entryCheck ? <Entry entry={entryCheck} /> :
                <h1>404 Not Found</h1> }
            </section>
        </>
    )
}

export default Page;