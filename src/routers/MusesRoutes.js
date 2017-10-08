import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodos'
import VisibleTodoList from '../containers/VisibleTodoList'
import ItemList from '../components/ItemList'
import CommentList from '../components/CommentList'

const MusesRoutes = () => (
  <main>	
    <Switch>
      <Route exact path='/' component={VisibleTodoList}/>
      <Route exact path='/todo' component={AddTodo}/>
      <Route exact path='/footer' component={TodoFooter}/>
      <Route exact path='/itemList' component={ItemList}/>
      <Route exact path='/comments' component={CommentList}/>
    </Switch>
  </main>
)

export default MusesRoutes
