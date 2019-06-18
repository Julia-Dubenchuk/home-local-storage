import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import styles from './index.css';

const News = ({ data: { id, title, text } }) => (
    <li className={styles.newsItem}>
        <div className={styles.wrapperImg}>
            <Icon name="image" />
        </div>
        <h2 className={styles.newsTitle}>{title}</h2>
        <p className={styles.newsText}>{text}</p>
        <Link to={`/news/${id}`} className={styles.linkDetail}>More Information</Link>
    </li>
);

export default News;
