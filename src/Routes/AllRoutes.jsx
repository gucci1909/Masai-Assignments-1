import React from 'react'
import Home from './Home'
import Login from "./Login"
import Dashboard from "./Dashboard"
import RestaurantPage from "./RestaurantPage"
import { Route } from 'react-router-dom'
import {Routes} from "react-router-dom"
import PrivateRoute from '../Components/PrivateRoute'


function AllRoute() {
  return <div>{

    <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
    <Route path='/restaurants/:id' element={
     <PrivateRoute><RestaurantPage/></PrivateRoute>
        }></Route>
    </Routes>

  }</div>
  // )
}

export default AllRoute
