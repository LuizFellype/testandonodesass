import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Router from './Router'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'fullcalendar/dist/fullcalendar.css'
import './layout/layout.css'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Router />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.register()
