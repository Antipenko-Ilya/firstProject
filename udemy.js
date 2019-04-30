var money = prompt('Ваш бютжет на месяц?');
var time = prompt('Введите дату в формате ДД-ММ-ГГГГ');

var appData = {
	'Бютжет': +money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
var q = prompt('Введите обязательную статью расходов в этом месяце');
var q2 = prompt('Во сколько это обойдется?');

appData.expenses[q] = q2;

alert('Ваш бютжет на день ' + appData['Бютжет']/30 + ' рублей');
