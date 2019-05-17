import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './template/utils/ScrollToTop'
import Router from './Router'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Router />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.register()
