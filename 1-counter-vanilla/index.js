/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2017-12-09 03:22:20
 * @modify date 2017-12-09 03:22:20
 * @desc [description]
*/


// 定义reducer
function counter(state, action) { 
  if (typeof state === 'undefined') {
    return 0
  } 

  switch (action.type) {
    case 'INCREMENT': 
      return state + 1
      break;
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 定义store
var store = Redux.createStore(counter)
var valueEl = document.getElementById('value')

function render () {
  console.log(store.getState().toString())
  valueEl.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)

document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'INCREMENT' })
  console.log('increment')
})

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch({ type: 'DECREMENT' })
  console.log('decrement')
})

document.getElementById('incrementIfOdd').addEventListener('click', function () {
  console.log('incrementIfOd')
  if(store.getState() % 2 === 1) {
    store.dispatch({ type: 'INCREMENT' })
  }
})

document.getElementById('incrementAsync').addEventListener('click', function () {
  console.log('incrementAsync')
  setTimeout(() => {
    store.dispatch({ type: 'INCREMENT' })
  }, 1000);
})