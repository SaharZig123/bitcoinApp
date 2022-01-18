import React, { Component } from 'react'
import './scss/global.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { MisterBitcoinApp } from './pages/MisterBitcoinApp';
import { Contacts } from './pages/Contacts'
import { Charts } from './pages/Charts'
import { ContactDetails } from './pages/ContactDetails';
import { ContactEdit } from './pages/ContactEdit';
import { Signup } from './pages/Signup';

export class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <AppHeader />
          <main className='container main-content'>
            <Switch>
              <Route component={ContactEdit} path='/contact/edit/:id?' />
              <Route component={ContactDetails} path='/contact/:id' />
              <Route component={Charts} path='/charts' />
              <Route component={Contacts} path='/contact' />
              <Route component={Signup} path='/signup' />
              <Route component={MisterBitcoinApp} path='/' />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
