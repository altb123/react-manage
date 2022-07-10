import { createStore } from 'redux'
import { todoApp } from '../reducer/index.js';
export default createStore(todoApp);
