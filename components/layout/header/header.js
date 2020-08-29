import Hero from './hero';
import Nav from '../nav';
import style from './header.module.scss';
import { useRouter } from 'next/router';

const Header = ({ data, tags, pages }) => {
    const router = useRouter();
    let { art } = data;
    let { asPath } = router;
    let { page, param } = router.query;
    let slugs = param || page || '/';

    const checkParams = () => {
        if(asPath.includes(param)) {
            console.log(asPath, param)
        }
        else if(page) {
            console.log(page[page.length-2])

            if(art[page.length-2]) {
                console.log(art[page.length-2])
                // console.log(art[page.length-2])
                // console.log(page[page.length-1])
            }
        } 
    }

    checkParams();

    return (
        <>
        <header className={style.banner}>
            <Hero pages={pages}/>
        </header>
        <Nav tags={tags}/>
        </>
    )
}

export default Header;