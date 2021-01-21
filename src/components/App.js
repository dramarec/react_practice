import React, { Component } from 'react';
import Home from './home/Home';
import CardSpendings from './cardSpendings/CardSpendings';
import CardIncome from './cardIncome/CardIncome';

export default class App extends Component {
    state = {
        incomIsOpen: false,
        spendIsOpen: false,
        homeIsOpen: true,
        spenData: [],
        incomeData: [],
    };
    componentDidMount() {
        const spending = localStorage.getItem('spending');
        const income = localStorage.getItem('income');
        if (spending) {
            this.setState({ spenData: JSON.parse(spending) });
        }
        if (income) {
            this.setState({ incomeData: JSON.parse(income) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.spenData !== this.state.spenData) {
            localStorage.setItem(
                'spending',
                JSON.stringify(this.state.spenData),
            );
        }
        if (prevState.incomeData !== this.state.incomeData) {
            localStorage.setItem(
                'income',
                JSON.stringify(this.state.incomeData),
            );
        }
    }

    toggleSpendings = () => {
        // const { incomIsOpen, spendIsOpen, home } = this.state;
        // this.setState({ spendIsOpen: true, home: false });
        this.setState(prevState => ({
            spendIsOpen: !prevState.spendIsOpen,
            homeIsOpen: !prevState.homeIsOpen,
        }));
    };
    toggleIncome = () => {
        this.setState(prevState => ({
            incomIsOpen: !prevState.incomIsOpen,
            homeIsOpen: !prevState.homeIsOpen,
        }));
    };
    handlerSubmit = ({ key, data }) => {
        if (key === 'spending') {
            this.setState(prevState => ({
                spenData: [...prevState.spenData, data],
            }));
            this.toggleSpendings();
        } else if (key === 'income') {
            this.setState(prevState => ({
                incomeData: [...prevState.incomeData, data],
            }));
            this.toggleIncome();
        }
    };

    render() {
        const { incomIsOpen, spendIsOpen, homeIsOpen } = this.state;
        return (
            <>
                {homeIsOpen && (
                    <Home
                        onToggleSpendings={this.toggleSpendings}
                        onToggleIncome={this.toggleIncome}
                    />
                )}
                {spendIsOpen && (
                    <CardSpendings
                        onToggleSpendings={this.toggleSpendings}
                        onHandlerSubmit={this.handlerSubmit}
                    />
                )}
                {incomIsOpen && (
                    <CardIncome
                        onToggleIncome={this.toggleIncome}
                        onHandlerSubmit={this.handlerSubmit}
                    />
                )}
            </>
        );
    }
}
