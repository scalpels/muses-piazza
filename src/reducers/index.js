import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import counter from './counter'
import { items, itemsHasErrored, itemsIsLoading } from './items';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  counter,
  items,
  itemsHasErrored,
  itemsIsLoading
})

export default todoApp
