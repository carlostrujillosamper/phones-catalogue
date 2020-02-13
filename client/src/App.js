import './App.scss'
import React, { Component } from 'react'
import PhoneList from './components/phoneList'
import { Route, Switch } from 'react-router-dom'
import PhoneDetail from './components/phoneDetail'
import { useParams } from 'react-router-dom'

function App(){

  const {id} = useParams()


  return(
    <React.Fragment>
    
    <Route path='/'>
    <PhoneList></PhoneList>
    </Route>
     <Route path='/:id'>
     <PhoneDetail></PhoneDetail>
     </Route>
     {id ?null: <div className='default-message'>
      <h3>SELECT A PHONE FROM THE LIST ABOVE</h3>
    </div>}
     
     </React.Fragment>
  )
}

export default App

