import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Loading from './Loading'
// import './Phones.scss'


export default function PhoneDetail() {

  const phones = useSelector(state => state)
  const {id} = useParams()
  const phone = phones.phones[id]
  

  return (
      
    <div>
        {!phone?<Loading></Loading>:
       <div className="phone-info">
                    <div className="phone-info-img">
                        <img src={phone.imageFileName} alt="Phone" />
                    </div>
                    <table className="phone-info-table">
                        <tbody>
                            <tr>
                                <td><span>Name:</span></td>
                                <td>{phone.name}</td>
                            </tr>
                            <tr>
                                <td><span>Manufacturer:</span></td>
                                <td>{phone.manufacturer}</td>
                            </tr>
                            <tr>
                                <td><span>Description:</span></td>
                                <td>{phone.description}</td>
                            </tr>
                            <tr>
                                <td><span>Color:</span></td>
                                <td>{phone.color}</td>
                            </tr>
                            <tr>
                                <td><span>Price:</span></td>
                                <td>{phone.price}</td>
                            </tr>
                            <tr>
                                <td><span>Screen:</span></td>
                                <td>{phone.screen}</td>
                            </tr>
                            <tr>
                                <td><span>Processor:</span></td>
                                <td>{phone.processor}</td>
                            </tr>
                            <tr>
                                <td><span>Ram:</span></td>
                                <td>{phone.ram}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
    </div>
  )
}
