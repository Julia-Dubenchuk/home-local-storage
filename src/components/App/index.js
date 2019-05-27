import React, { Component } from 'react';
import NewsList from '../NewsList';
import Form from '../Form';
import Icon from '../ui/Icon';
import styles from './index.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            counter: 2,
            allNews: [
                {
                    id: 1,
                    title: 'hello1',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 2,
                    title: 'hello2',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 3,
                    title: 'hello3',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 4,
                    title: 'hello4',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 5,
                    title: 'hello5',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 6,
                    title: 'hello6',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
                {
                    id: 7,
                    title: 'hello7',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                },
            ],
        };

        this.addNews = this.addNews.bind(this);
        this.addCount = this.addCount.bind(this);
        this.showMoreNews = this.showMoreNews.bind(this);
        this.isLengthArrayNews = this.isLengthArrayNews.bind(this);
        this.filterNews = this.filterNews.bind(this);
    }

    componentDidMount() {
        const { allNews } = this.state;
        const localNews = JSON.parse(window.localStorage.getItem('news'));
        this.setState({
            allNews: localNews ? [
                ...localNews, ...allNews.map(this.addCount(localNews.length)),
            ] : allNews,
        });
    }

    addNews(news) {
        const { allNews } = this.state;
        const count = 1;
        const arrayLocal = JSON.parse(window.localStorage.getItem('news'));
        const arr = arrayLocal ? [news, ...arrayLocal.map(this.addCount(count))] : [news];
        window.localStorage.setItem('news', JSON.stringify(arr));
        this.setState({
            allNews: [news, ...allNews.map(this.addCount(count))],
        });
    }

    filterNews(news) {
        return news.filter(this.isLengthArrayNews);
    }

    // eslint-disable-next-line class-methods-use-this
    addCount(count) {
        // eslint-disable-next-line func-names
        return function (item) {
            // eslint-disable-next-line no-param-reassign
            item.id += count;
            return item;
        };
    }

    isLengthArrayNews(index) {
        const { counter } = this.state;
        return index.id <= counter;
    }

    showMoreNews() {
        const { counter } = this.state;
        this.setState({
            counter: counter + 2,
        });
    }

    render() {
        const { allNews, counter } = this.state;
        return (
            <div className={styles.wrapperApp}>
                <Form handleAction={this.addNews} news={allNews.length} />
                <NewsList news={this.filterNews(allNews)} />
                {
                    (allNews.length > counter) ? (
                        <button type="button" onClick={this.showMoreNews} className={styles.button}>
                            <Icon name="sync" />
                            <span className={styles.btnName}>Показать ещё</span>
                        </button>
                    ) : null
                }
            </div>
        );
    }
}

export default App;
