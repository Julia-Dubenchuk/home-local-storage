import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Icon from '../ui/Icon';
import PageNotFound from '../PageNotFound';
import styles from './index.css';

const NewsPage = ({ match }) => {
    const [news, getNews] = useState({});
    const allNews = useSelector(store => store.news);
    useEffect(() => {
        getNews(allNews.filter(item => item.id.toString() === match.params.id)[0]);
    }, [match.params.id]);
    if (news) {
        return (
            <div className={styles.newsPage}>
                <div className={styles.wrapperImg}>
                    <Icon name="image" />
                </div>
                <h2 className={styles.newsTitle}>{news.title}</h2>
                <p>{news.text}</p>
            </div>
        );
    }
    return (
        <PageNotFound />
    );
};

export default NewsPage;
