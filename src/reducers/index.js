import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import counter from './counter'
import { items, itemsHasErrored, itemsIsLoading } from './items'
import {comments,comment,comment2} from './comments'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  counter,
  items,
  itemsHasErrored,
  itemsIsLoading,
  comments,
  comment,
  comment2
})

export default todoApp
