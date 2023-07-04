'use strict'
const GI = {
  createElement (tag, atributes) {
    let element = document
    if (tag) element = document.createElement(tag)
    if (atributes) {
      for (const key in atributes) {
        if (atributes.hasOwnProperty(key)) {
          const value = atributes[key]
          element[key] = value
        }
      }
    }
    return element
  }
}

const to_do = [
  'Alimentar al perro',
  'Estudiar para prueba escrita',
  'Pagar taxes',
  'Pasear a perro',
  'Comprar entradas para el cine'
]

const to_do_list = GI.createElement('ul')

to_do.forEach(item => {
  let li = GI.createElement('li', { textContent: item })
  let checkbox = GI.createElement('input', { type: 'checkbox' })
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      li.style.textDecoration = 'line-through'
      li.style.color = 'gray'
    } else {
      li.style.textDecoration = 'none'
      li.style.color = 'black'
    }
  })
  li.appendChild(checkbox)
  to_do_list.appendChild(li)
})

const mainContainer = document.getElementById('main-container')
mainContainer.appendChild(to_do_list)
