import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    HashRouter as Router, Route, Switch, NavLink,
   } from 'react-router-dom';
import store from './store';
import App from './components/App';
import Form from './components/Form';
import PageNotFound from './components/PageNotFound';
import NewsPage from './components/NewsPage';
import styles from './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <header className={styles.headerApp}>
                <nav>
                    <ul className={styles.navApp}>
                        <li className={styles.navItem}>
                            <NavLink
                              activeStyle={{ backgroundColor: '#00a3b3', color: '#fff' }}
                              exact
                              to="/"
                            >
                                Home News
                            </NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink
                              activeStyle={{ backgroundColor: '#00a3b3', color: '#fff' }}
                              to="/form"
                            >
                                Form news
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={styles.wrapperApp}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/form" component={Form} />
                    <Route path="/news/:id" component={NewsPage} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>,
window.document.getElementById('root'),
);
