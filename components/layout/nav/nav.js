import style from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router'


// https://www.google.com/search?q=passing+data+through+Link+nextjs&rlz=1C5CHFA_enUS503US503&oq=passing+data+through+Link+nextjs&aqs=chrome..69i57j33.6381j0j4&sourceid=chrome&ie=UTF-8

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