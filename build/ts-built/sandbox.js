"use strict";
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
// Explicit types
let character;
let age;
let isLoggedIn;
let getName;
// Arrays
let ninjas;
let nomes = [];
// union types
let mixed = [];
mixed.push('hello');
mixed.push(20);
//mixed.push(false) ERROR
let uid;
uid = '123';
uid = 123;
// Objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // array é um tipo de objeto
let samurai;
// Any type
let hobby = 20;
hobby = 'Futebol';
hobby = 'Volei';
// Functions
let greet;
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c) => {
    console.log(a + b);
};
add(5, 10);
//----------------
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
// Function signatures
let contar;
contar = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Verificação de tipo
const anchor = document.querySelector('a');
// O Typescirpt entende que pode ser retornado nulo
// Nos forçando a utilizar uma verificação
if (anchor) {
    console.log(anchor.href);
}
// Caso o desenvolvedor tenha certeza que o método
// irá retornar um valor pode ser adicionada uma exclamação
const anchor2 = document.querySelector('a');
console.log(anchor2.href);
// O tipo de retorno será HTMLFormElement
const form = document.querySelector('form');
// Caso exista mais de um elemento
// form pode-se usar a classe do elemento
// O retorno dessa vez sera Element,
// porque a classe pode ser aplicada a qualquer elemento
const form2 = document.querySelector('.new-item-form');
// para definir o retorno (Casting)
const form3 = document.querySelector('.new-item-form');
console.log(form3.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// Classes
class Invoice1 {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes R$${this.amount} for ${this.details}`;
    }
}
class Invoice3 {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes R$${this.amount} for ${this.details}`;
    }
}
