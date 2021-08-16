// no console atribua um valor diferente em app.message
var app = new Vue({ el: '#app', data: { message: 'Olá Vue!'} })

  // app2.message = 'alguma nova mensagem' no console
  // faz trocar a mensagem
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
  })

  // app3.seen = false faz desaparecer o componente
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  // No console, informe app4.todos.push({ text: 'Novo item' }).
  // verá um novo item ser acrescentado dinamicamente à lista.
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Criar algo incrível' }
      ]
    }
  })

  // No console, informe 
  // app4.todos.push({ text: 'Novo item' }). Você verá um 
  // novo item ser acrescentado dinamicamente à lista.

  // Para permitir aos usuários interagir com o aplicativo, podemos 
  // usar a diretiva v-on para anexar escutas a eventos (event listeners) 
  // que invocam métodos em nossas instâncias Vue:
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Olá Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  // Vue também provê a diretiva v-model, que torna a interligação 
  // de mão dupla (two-way binding) entre a caixa de texto e o estado 
  // da aplicação uma moleza:
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Escreva aqui!'
    }
  })

// No Vue, um componente é essencialmente uma instância Vue com opções predefinidas. Registrar um componente no Vue é simples:
// Define um novo componente chamado todo-item
Vue.component('todo-item', {
    template: '<li>Isso é um item</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      message: 'Escreva aqui!'
    }
  })