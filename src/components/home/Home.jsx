import React, { Component } from 'react';
import Section from '../shared/Section/Section';

export default class Home extends Component {
    render() {
        return (
            <Section>
                <div>
                    <h2>Доходы</h2>
                    <p>RUB</p>
                    <ul>
                        <li>Сегодня 0:00</li>
                        <li>Неделя 0:00</li>
                        <li>Месяц 0:00</li>
                    </ul>

                    <button
                        className="button-home"
                        type="button"
                        onClick={this.props.onToggleIncome}
                    >
                        +
                    </button>
                </div>
                <div>
                    <h2>Расходы</h2>
                    <p>RUB</p>
                    <ul>
                        <li>Сегодня 0:00</li>
                        <li>Неделя 0:00</li>
                        <li>Месяц 0:00</li>
                    </ul>
                    <button
                        className="button-home"
                        type="button"
                        onClick={this.props.onToggleSpendings}
                    >
                        +
                    </button>
                </div>
            </Section>
        );
    }
}
