import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countriesReducer from './reducers/countries'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootStore = combineReducers({
  countries: countriesReducer
})

const store = createStore(
  rootStore,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store