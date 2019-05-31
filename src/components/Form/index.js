import React, { PureComponent } from 'react';

import Icon from '../ui/Icon';
import styles from './index.css';

export default class Form extends PureComponent {
    state = {
        id: 1,
        title: '',
        text: '',
    };

    textChange = (e) => {
        this.setState({
            [e.target.name]: e ? e.target.value : '',
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const { id, title, text } = this.state;
        const { handleAction } = this.props;
        const newItem = {
            id,
            title,
            text,
        };
        handleAction(newItem);
        this.textChange(e);
        this.setState({
            title: '',
            text: '',
        });
    }

    render() {
        const { title, text } = this.state;
        return (
            <form className={styles.formAddNews} id="form" onSubmit={this.submitForm}>
                <input
                  required
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.textChange}
                  placeholder="Введите название новости"
                />
                <textarea
                  placeholder="Введите содержание"
                  required
                  name="text"
                  value={text}
                  onChange={this.textChange}
                />
                <button className={styles.button} type="submit">
                    <Icon name="add" />
                    <span className={styles.btnName}>Добавить</span>
                </button>
            </form>
        );
    }
}
