import React, { Component } from 'react';
import Home from './home/Home';
import CardSpendings from './cardSpendings/CardSpendings';
import CardIncome from './cardIncome/CardIncome';

export default class App extends Component {
    state = {
        incomIsOpen: false,
        spendIsOpen: false,
        home: true,
    };

    handleClick = e => {
        // const { incomIsOpen, spendIsOpen, home } = this.state;
        this.setState({ incomIsOpen: true, home: false });
    };

    render() {
        const { incomIsOpen, spendIsOpen, home } = this.state;
        return (
            <>
                {home && <Home onHandleClick={this.handleClick} />}
                {spendIsOpen && <CardSpendings />}
                {incomIsOpen && <CardIncome />}
            </>
        );
    }
}
