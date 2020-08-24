import style from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Nav = (props) => {
    const art = props.data;
    const artList = [];
    let tags;
    const router = useRouter();
    const pagesParam = router.query.param;


    const generateNavigate = () => {
        // Generate Nav
        tags = artList.map((tag, i) => {
            let { id, thumbnailUrl, url, title, albumId } = tag;
            if(i < 3) {
                return (
                    <Link href={`/art/${id}`} key={id}>
                        <a className={style.btn}>{title}</a>
                    </Link>
                )
            }
        });
    }
    generateNavigate();


    if(pagesParam) return null;
    else {
        return (
            
            <nav className={style.navi}>
                <Link href="/">
                    <a className={style.btn} >All Art</a>
                </Link>
                {tags}
            </nav>
        )
    }
}

export default Nav;