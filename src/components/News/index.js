import React from 'react';

import Icon from '../ui/Icon';
import styles from './index.css';

const News = ({ title, text }) => (
    <li className={styles.newsItem}>
        <div className={styles.wrapperImg}>
            <Icon name="image" />
        </div>
        <h2 className={styles.newsTitle}>{title}</h2>
        <p className={styles.newsText}>{text}</p>
    </li>
);

export default News;
