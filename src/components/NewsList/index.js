import React, { PureComponent } from 'react';

import News from '../News';
import styles from './index.css';

class NewsList extends PureComponent {
    render() {
        const { news } = this.props;
        const newsItem = news.map(item => (
            <News key={item.id} title={item.title} text={item.text} />
        ));
        return (
            <ul className={styles.wrapperNewsList}>
                { newsItem }
            </ul>
        );
    }
}

export default NewsList;
