import style from './nav.module.scss';

const testFunc = (event) => {
    // console.log('Button has been clicked!');
    const slug = event.target.id;
    // window.location = slug;
    setTimeout(() => { window.location = slug; }, 2000);
}

//  function or conditionals for css classes?

export default function Nav() {
    return (
        <nav className={style.navi}>
            <button className={style.btn} onClick={testFunc} id="/">
                Test Return
            </button>
            <button className={[style.btn,]} onClick={testFunc} id="about">
                Test About
            </button>
            <button className={style.btn} onClick={testFunc} id="contact">
                Test Contact
            </button>
        </nav>
    )
}