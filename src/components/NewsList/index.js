import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCounter } from '../../actions';
import News from '../News';
import Icon from '../ui/Icon';
import styles from './index.css';

const NewsList = () => {
    const [news, filterNews] = useState([]);
    const counter = useSelector(store => store.counter);
    const allNews = useSelector(store => store.news);
    const dispatch = useDispatch();

    useEffect(() => {
        filterNews(allNews.filter((item, index) => index <= counter));
    }, [counter, allNews]);

    const newsItem = news.map(item => (
        <News key={item.id} data={item} />
    ));
    return (
        <>
            <ul className={styles.wrapperNewsList}>
                {newsItem}
            </ul>
            {
                (allNews.length > counter) ? (
                    <button type="button" onClick={() => dispatch(getCounter())} className={styles.button}>
                        <Icon name="sync" />
                        <span className={styles.btnName}>Показать ещё</span>
                    </button>
                ) : null
            }
        </>
    );
};

export default NewsList;
