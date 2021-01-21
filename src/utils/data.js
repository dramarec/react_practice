const currency = {
    title: 'Валюта',
    name: 'currency',
    options: [
        { value: 'select currency', title: 'Выбор валюты' },
        { value: 'usd', title: 'USD' },
        { value: 'eur', title: 'EUR' },
        { value: 'rub', title: 'RUB' },
    ],
};

const category = {
    title: 'Категория расходов',
    name: 'category',
    options: [
        { value: 'select category', title: 'Выбор категории' },
        { value: 'eat', title: 'Еда' },
        { value: 'drinks', title: 'Напитки' },
        { value: 'clothes', title: 'Одежда' },
    ],
};
const income = {
    title: 'Доходы',
    name: 'income',
    options: [
        { value: 'select category', title: 'Выбор дохода' },
        { value: 'salary', title: 'Зарплата' },
        { value: 'deposit', title: 'Депозит' },
        { value: 'lottery', title: 'Дотерея' },
    ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { currency, category, income };
