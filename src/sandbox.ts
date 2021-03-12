
var inputs = document.querySelectorAll('input')

console.log(inputs)

inputs.forEach(input => {
  console.log(input)
})

// Explicit types
let character: string
let age: number
let isLoggedIn: boolean
let getName: Function

// Arrays
let ninjas: string[]
let nomes: string[] = []

// union types
let mixed: (string | number)[] = []
mixed.push('hello')
mixed.push(20)
//mixed.push(false) ERROR

let uid: string|number
uid = '123'
uid = 123

// Objects
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30}
ninjaOne = [] // array é um tipo de objeto

let samurai: {
  name: string
  age: number
  beltColour: string
}

// Any type
let hobby: any = 20
hobby = 'Futebol'
hobby = 'Volei'

// Functions
let greet: Function

greet = () => {
  console.log('hello, again')
}

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b)
}

add(5, 10)

//----------------
const minus = (a: number, b: number): number => {
  return a - b
}
let result = minus(10,7)

// Function signatures
let contar: (a: string, b: string) => void
contar = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// Verificação de tipo
const anchor = document.querySelector('a')

// O Typescirpt entende que pode ser retornado nulo
// Nos forçando a utilizar uma verificação
if(anchor){
  console.log(anchor.href)
}

// Caso o desenvolvedor tenha certeza que o método
// irá retornar um valor pode ser adicionada uma exclamação
const anchor2 = document.querySelector('a')!
console.log(anchor2.href)


// O tipo de retorno será HTMLFormElement
const form = document.querySelector('form')!

// Caso exista mais de um elemento
// form pode-se usar a classe do elemento
// O retorno dessa vez sera Element,
// porque a classe pode ser aplicada a qualquer elemento
const form2 = document.querySelector('.new-item-form')!

// para definir o retorno (Casting)
const form3 = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form3.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form3.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})

// Classes
class Invoice1 {
  readonly client: string
  private details: string
  public amount: number

  constructor(c: string, d: string, a : number){
    this.client = c
    this.details = d
    this.amount = a
  }

  format(){
    return `${this.client} owes R$${this.amount} for ${this.details}`
  }
}

class Invoice3 {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format(){
    return `${this.client} owes R$${this.amount} for ${this.details}`
  }
}