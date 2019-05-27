import React, { PureComponent } from 'react';

import Icon from '../ui/Icon';
import styles from './index.css';

class News extends PureComponent {
    render() {
        const { title, text } = this.props;
        return (
            <li className={styles.newsItem}>
                <div className={styles.wrapperImg}>
                    <Icon name="image" />
                </div>
                <h2 className={styles.newsTitle}>{title}</h2>
                <p className={styles.newsText}>{text}</p>
            </li>
		);
    }
}

export default News;
