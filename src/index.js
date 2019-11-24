import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import {reducer} from './components/reducers/';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);


render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
