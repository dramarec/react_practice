import React from 'react';
import Section from '../shared/section/Section';
import styles from './Home.module.css';
import CounTotal from '../../utils/countTotal';

const Home = ({ onToggleIncome, onToggleSpendings, spending, incoming }) => {
    const counter = new CounTotal();
    return (
        <Section>
            <div className={styles.home_container}>
                <h2>Расходы</h2>
                <p>RUB</p>
                <ul>
                    <li>Сегодня: {counter.countDayTotal(spending)}</li>
                    <li>Неделя: {counter.countWeekTotal(spending)}</li>
                    <li>Месяц: {counter.countMounthTotal(spending)}</li>
                </ul>
                <button
                    className="button-home"
                    type="button"
                    onClick={onToggleSpendings}
                >
                    +
                </button>
            </div>

            <div className={styles.home_container}>
                <h2>Доходы</h2>
                <p>RUB</p>
                <ul>
                    <li>Сегодня: {counter.countDayTotal(incoming)}</li>
                    <li>Неделя: {counter.countWeekTotal(incoming)}</li>
                    <li>Месяц: {counter.countMounthTotal(incoming)}</li>
                </ul>

                <button
                    className="button-home"
                    type="button"
                    onClick={onToggleIncome}
                >
                    +
                </button>
            </div>
        </Section>
    );
};
export default Home;
