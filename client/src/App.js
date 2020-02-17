import './App.scss'
import React, { Component } from 'react'
import PhoneList from './components/phoneList'
import { Route, Switch } from 'react-router-dom'
import PhoneDetail from './components/phoneDetail'
import { useParams } from 'react-router-dom'

function App(){



  return(
    <React.Fragment>
      <PhoneList></PhoneList>
    <Switch>
    <Route exact path='/'>
    <div className='default-message'>
      <h3>SELECT A PHONE FROM THE LIST ABOVE</h3>
    </div>
    </Route>
     <Route exact path='/:id'>
     <PhoneDetail></PhoneDetail>
     </Route>
     </Switch>
     
     
     </React.Fragment>
  )
}

export default App

