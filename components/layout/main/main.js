import style from './main.module.scss';

export default function Main({ children }) {
    return(
        <main className={style.content}>
            <h4>Main Component</h4>
             {children}
        </main>
    )
}