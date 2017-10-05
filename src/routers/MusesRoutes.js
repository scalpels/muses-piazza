import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodos'
import VisibleTodoList from '../containers/VisibleTodoList'

const MusesRoutes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={VisibleTodoList}/>
      <Route exact path='/todo' component={AddTodo}/>
      <Route exact path='/footer' component={TodoFooter}/>
    </Switch>
  </main>
)

export default MusesRoutes
