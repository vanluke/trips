import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import 'font-awesome/scss/font-awesome.scss';
import configureStore from 'store';
import './main.scss';
import {App} from 'root/component/app';

const store = configureStore();

render(<Provider store={store}><App /></Provider>,
  document.getElementById('container'));
