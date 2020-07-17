import Header from './header';
import style from './layout.module.scss';


export default function Layout({ children }) {
    return(
        <div className="container">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}