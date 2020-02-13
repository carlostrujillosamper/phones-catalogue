import {createStore} from 'redux'
import phonesReducer from './reducers'

const store = createStore(phonesReducer)

export default store