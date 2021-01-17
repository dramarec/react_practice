import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Расходы</h2>
                <p>RUB</p>
                <ul>
                    <li>Сегодня 0:00</li>
                    <li>Неделя 0:00</li>
                    <li>Месяц 0:00</li>
                </ul>
                <button type="button" onClick={this.props.onHandleClick}>
                    +
                </button>
            </div>
        );
    }
}
