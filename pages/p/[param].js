import { useRouter } from 'next/router';

const Page = ({ pages }) => {
    const router = useRouter();
    const { param } = router.query;



    const generatePage = (entries, param) => {
        let page = entries.map((entry, i) => {
            let { slug } = entry.fields;
            console.log(param)
            if(slug === param) {
                return (
                    <section>
                        <Entry /> 
                    </section>
                )
            }
            else return <h1>404 not found</h1>
            
        });
        return <>{page}</>;
    }
   return  generatePage(pages, param)
}


const Entry = (props) => {
    return (
        <>
            <h1>Entry Js</h1>
        </>
    );
}


export default Page;