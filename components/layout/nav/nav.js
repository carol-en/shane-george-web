import style from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Nav = (props) => {
    const tags = props.artList.map((tag, i) => {
        if(i < 3) {
            return (
                <Link href={`/art/${tag.id}`}>
                    <a className={style.btn} key={tag.id}>{tag.title}</a>
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