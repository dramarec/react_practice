import React, { Component } from 'react';

import Select from '../shared/Select/Select';
import Input from '../shared/Input/Input';
import Form from '../shared/Form/Form';

// import { data } from '../../utils/selctOptions';
import data from '../../utils/data';
import moment from 'moment';
import CardTitle from '../shared/cardTitle/CardTitle';
import Section from '../shared/Section/Section';

export default class CardSpendings extends Component {
    state = {
        cardId: 'spending',
        date: moment(Date.now()).format('YYYY-MM-DD'),
        time: moment(Date.now()).format('HH:mm'),
        total: '',
        category: '',
        currency: '',
        comment: '',
    };
    resetState = () => {
        this.setState({
            date: moment(Date.now()).format('YYYY-MM-DD'),
            time: moment(Date.now()).format('HH:mm'),
            total: '',
            category: '',
            currency: '',
        });
    };
    onHandlerChange = e => {
        // console.log('e.target', e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    onFormSubmit = e => {
        e.preventDefault();
        const { cardId, ...data } = this.state;
        console.log('cardId :', data);
        this.props.onHandlerSubmit({ key: cardId, data });
        this.resetState();
    };

    render() {
        // console.log(this.state);
        return (
            <Section>
                <Form onSubmit={this.onFormSubmit}>
                    <CardTitle
                        title="Расходы"
                        onToggle={this.props.onToggleSpendings}
                    >
                        <Input
                            title="День"
                            type="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.onHandlerChange}
                        />
                        <Input
                            title="Время"
                            type="time"
                            name="time"
                            value={this.state.time}
                            onChange={this.onHandlerChange}
                        />
                        <Select
                            sets={data.category}
                            handleChange={this.onHandlerChange}
                        />
                        <Input
                            title="Сумма"
                            name="total"
                            value={this.state.total}
                            placeholder="Введите сумму"
                            onChange={this.onHandlerChange}
                        />
                        <Select
                            sets={data.currency}
                            handleChange={this.onHandlerChange}
                        />
                        <Input
                            name="comment"
                            value={this.state.comment}
                            placeholder="Комментарий"
                            onChange={this.onHandlerChange}
                        />
                    </CardTitle>
                </Form>
            </Section>
        );
    }
}
