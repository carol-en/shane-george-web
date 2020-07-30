import style from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Nav = (props) => {
    const tags = props.artList.map((tag, i) => {
        let { id, thumbnailUrl, url, title, albumId } = tag;
        if(i < 3) {
            return (
                <Link href={`/${id}`}>
                    <a className={style.btn} key={id}>{title}</a>
                </Link>
            )
        }
    });
    return (
        <nav className={style.navi}>
            {tags}
        </nav>
    )
}

export default Nav;