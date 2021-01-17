import React, { Component } from 'react';

import Select from '../shared/Select/Select';
import Input from '../shared/Input/Input';
import Form from '../shared/Form/Form';

// import { data } from '../../utils/selctOptions';
import data from '../../utils/data';
import moment from 'moment';
import CardTitle from '../shared/cardTitle/CardTitle';
import Section from '../shared/Section/Section';

export default class CardIncome extends Component {
    state = {
        date: moment(Date.now()).format('YYYY-MM-DD'),
        time: moment(Date.now()).format('HH:mm'),
        data: '',
        total: '',
        catygory: '',
        currency: '',
    };

    onHandlerChange = e => {
        // console.log('e.target', e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        // console.log(this.state);
        return (
            <Section>
                <Form>
                    <CardTitle title="Доходы" />
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
                        sets={data.income}
                        handleChange={this.onHandlerChange}
                        value={data.currency}
                    />
                    <Input
                        name="total"
                        value={this.state.total}
                        placeholder="Комментарий"
                        onChange={this.onHandlerChange}
                    />
                </Form>
            </Section>
        );
    }
}
