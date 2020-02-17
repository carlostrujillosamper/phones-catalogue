import React, { Component, useState } from 'react'
import {findAll} from '../actions'
import {useSelector , useDispatch} from 'react-redux'
import  { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

import './Phones.scss'


function PhoneList(){

const phones = useSelector(state => state)
const dispatch = useDispatch()


useEffect(()=>{
  axios.get('http://localhost:5000/phones')
              .then(allPhones => {
                dispatch({type : 'FIND_ALL', payload : allPhones.data})

              })
              .catch(err=>console.log(err))

  
},[phones.loaded])

  return(
    <React.Fragment>
    <div className='phone-selector-wrapper'>
     {(!phones.loaded) ? <Loading className='loading'></Loading> : phones.phones.map(phone=><Link className='link' to={`/${phone.id}`}>  <div className='select-phone'tabIndex={`${phone.id}`}  key={phone.id}>{phone.name}</div> </Link>)} 
    </div>
    
   
    </React.Fragment>
  )
}

export default PhoneList