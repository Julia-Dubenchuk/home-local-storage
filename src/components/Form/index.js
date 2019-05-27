import React, { PureComponent } from 'react';

import Icon from '../ui/Icon';
import styles from './index.css';

class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            title: '',
            text: '',
        };
        this.textChange = this.textChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    textChange(e) {
        this.setState({
            [e.target.name]: e ? e.target.value : '',
        });
    }

    submitForm(e) {
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
                  onChange={e => this.textChange(e)}
                  placeholder="Введите название новости"
                />
                <textarea
                  placeholder="Введите содержание"
                  required
                  name="text"
                  value={text}
                  onChange={e => this.textChange(e)}
                />
                <button className={styles.button} type="submit">
                    <Icon name="add" />
                    <span className={styles.btnName}>Добавить</span>
                </button>
            </form>
        );
    }
}

export default Form;
