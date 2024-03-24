import css from './LoadMore.module.css'

const LoadMore = ({ handleLoadMore }) => {
    return (
        <button className={css.load} onClick={handleLoadMore}>Load more</button>
    );
}

export default LoadMore;