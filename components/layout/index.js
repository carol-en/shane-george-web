import Header from './header';
import style from './layout.module.scss';

export default function Layout(  { children, data } ) {
    return(
        <div className="container">
            <Header data={data} pages={data.pages} tags={data.tagsList} />
            <main>
                {children}
            </main>
        </div>
    )
}