import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {getAllNotifis} from './../../actions/notifs'
import notifiStore from './../../reducers/notifiStore'
import NotifiListWrap from './../../containers/NotifiListWrap'
import NotifiList from './../../components/NotifiList'
import Notifi from './../../components/Notifi'

let store = createStore(notifiStore)

store.dispatch(getAllNotifis())

render(
  <Provider store={store}>
    <NotifiListWrap />
{/*
    <NotifiList notifis={[{'id': 1, 'text': 'notifi one'}, {'id': 2, 'text': 'notifi two'}]} />
*/}
  </Provider>,
  document.getElementById('notifiList')
)
