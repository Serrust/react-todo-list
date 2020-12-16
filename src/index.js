import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application'
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store = {store}>
        <Application />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));