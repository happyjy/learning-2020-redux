const { createStore } = require('redux');
const { todoApp } = require('./reducers');

const store = createStore(todoApp);

export default store;
