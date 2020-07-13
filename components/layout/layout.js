import Header from './header';
import style from './layout.module.scss';


export default function Layout({ children }) {
    return(
        <div className="container">
            <h1>Layout Component!</h1>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}