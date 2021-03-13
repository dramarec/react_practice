import React, { Component } from 'react';
import moment from 'moment';

import Select from '../shared/select/Select';
import Input from '../shared/input/Input';
import Form from '../shared/form/Form';

// import { data } from '../../utils/selctOptions';
import data from '../../utils/data';
import CardTitle from '../shared/cardTitle/CardTitle';
import Section from '../shared/section/Section';

export default class CardIncome extends Component {
    state = {
        cardId: 'income',
        date: moment(Date.now()).format('YYYY-MM-DD'),
        time: moment(Date.now()).format('HH:mm'),
        total: '',
        income: '',
        currency: '',
        comment: '',
    };
    resetState = () => {
        this.setState({
            date: moment(Date.now()).format('YYYY-MM-DD'),
            time: moment(Date.now()).format('HH:mm'),
            total: '',
            currency: '',
            income: '',
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
                        title="Доходы"
                        onToggle={this.props.onToggleIncome}
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
                            sets={data.income}
                            handleChange={this.onHandlerChange}
                            value={data.category}
                        />
                        <Input
                            type="number"
                            title="Сумма"
                            name="total"
                            value={this.state.total}
                            onChange={this.onHandlerChange}
                            placeholder="Введите сумму"
                        />
                        <Select
                            sets={data.currency}
                            handleChange={this.onHandlerChange}
                            value={data.currency}
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
