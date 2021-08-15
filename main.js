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