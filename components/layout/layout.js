import Header from './header';
import Main from './main';
import style from './layout.module.scss';


export default function Layout({ children }) {
    return(
        <div className="container">
        <h1>Layout Component!</h1>
        <Header />
        <Main>
            {children}
        </Main>
        </div>
    )
}