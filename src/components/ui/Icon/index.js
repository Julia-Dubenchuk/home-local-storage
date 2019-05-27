import React from 'react';

import Add from './icons/add.svg';
import Sync from './icons/sync.svg';
import IconNews from './icons/news.svg';
import styles from './index.css';

const Icon = ({ name }) => {
    switch (name) {
        case 'add':
            return <Add className={styles.btnIcon} />;
        case 'sync':
            return <Sync className={styles.btnIcon} />;
        case 'image':
            return <IconNews className={styles.newsIcon} />;
        default:
            return <div />;
    }
};

export default Icon;
