import React from 'react'
// import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList from '../features/todos/TodoArr';
// import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList/>
    {/* <VisibleTodoList />
    <Footer /> */}
  </div>
)

export default App
