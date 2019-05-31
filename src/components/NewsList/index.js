import React from 'react';

import News from '../News';
import styles from './index.css';

const filterNews = (news, counter) => news.filter(item => item.id <= counter);

const NewsList = ({ allNews, counter }) => {
    const newsItem = filterNews(allNews, counter).map(item => <News key={item.id} title={item.title} text={item.text} />);
    return (
        <ul className={styles.wrapperNewsList}>
            { newsItem }
        </ul>
    );
};

export default NewsList;
