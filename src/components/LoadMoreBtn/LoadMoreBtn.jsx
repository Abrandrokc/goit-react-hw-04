import css from "./LoadMoreBtn.module.css"
export default function LoadMoreBtn({onClick}) {
   return <div><button className={css.but} type="button" onClick={onClick}>Load more</button></div>
}