import React, { Component } from 'react';

import Form from './shared/Form/Form';
import Input from './shared/Input/Input';
import Select from './shared/Select/Select';

import { outlay } from '../utils/selctOptions';
import { currency } from '../utils/currency';

export default class App extends Component {
    // userInfo = {
    //     id: '',
    //     avatar: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     contactInfo: '',
    //     moreInfo: '',
    //     role: 'student', //tutor, mentor
    // };

    state = {
        date: Date.now(),
        time: '',
        outlay: '',
        total: '',
        // catygory: '',
    };

    onHandlerChange = e => {
        // console.log('e.target', e.target);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        console.log(this.state);
        return (
            <Form>
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
                <Select sets={outlay} handleChange={this.onHandlerChange} />
                {/* <Input
                    title="Сумма"
                    name="total"
                    value={this.state.total}
                    placeholder="Введите сумму"
                    onChange={this.onHandlerChange}
                /> */}
                <Select sets={currency} handleChange={this.onHandlerChange} />
                {/* <Input
                    name="total"
                    value={this.state.total}
                    placeholder="Комментарий"
                    onChange={this.onHandlerChange}
                /> */}
            </Form>
        );
    }
}
