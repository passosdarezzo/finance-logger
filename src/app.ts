import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter'

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON
}

// Generics
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

// Generics with Interface
interface Resource<T>{
  uid: number
  resourceName: string
  resourceType: ResourceType
  data: T
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  resourceType: ResourceType.BOOK,
  data: { name: 'shaun' }
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  resourceType: ResourceType.FILM,
  data: ['bread', 'milk', 'apples']
}



// Form ref
const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter
  if(type.value === 'invoice'){
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'end')
  console.log(doc)
})
