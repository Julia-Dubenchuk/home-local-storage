import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '../ui/Icon';
import styles from './index.css';
import { getNews } from '../../actions';

const Form = () => {
    const [title, titleChange] = useState('');
    const [text, textChange] = useState('');
    const dispatch = useDispatch();
    const news = item => dispatch(getNews(item));

    function submitForm(e) {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            title,
            text,
        };
        const localNews = JSON.parse(window.localStorage.getItem('news'));
        window.localStorage.setItem('news', JSON.stringify(localNews ? [
            newItem, ...localNews] : [newItem]));
        news(newItem);
        textChange('');
        titleChange('');
    }

    return (
        <form className={styles.formAddNews} id="form" onSubmit={submitForm}>
            <input
              required
              type="text"
              name="title"
              value={title}
              onChange={e => titleChange(e.target.value)}
              placeholder="Введите название новости"
            />
            <textarea
              placeholder="Введите содержание"
              required
              name="text"
              value={text}
              onChange={e => textChange(e.target.value)}
            />
            <button className={styles.button} type="submit">
                <Icon name="add" />
                <span className={styles.btnName}>Добавить</span>
            </button>
        </form>
    );
};

export default Form;
