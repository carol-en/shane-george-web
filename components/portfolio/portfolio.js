import style from './portfolio.module.scss';
import Nav from './nav';


export default function Portfolio() {
    return (
        <>
        <Nav />
            <h6 className={style.folio}>Portfolio Component!</h6>
        </>
    )
}