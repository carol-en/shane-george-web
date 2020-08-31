import Header from './header';
import style from './layout.module.scss';

const Layout = ({ children, data }) => {
// =======================
// BANNER AREA FOR HEADER
// =======================
    return(
        <div className="container">
            <Header data={data} pages={data.pages} tags={data.tagsList} />

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;