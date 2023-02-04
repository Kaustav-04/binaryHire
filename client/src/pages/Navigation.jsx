import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/Freelancer/Dashboard'
import AllProjects from '../components/Home/AllProjects'
import Authorize from '../components/Home/Authorize'
import Landing from '../components/Home/Landing'
import About from '../components/Home/About'
import PostProject from '../components/Home/PostProject'

const Navigation = () => {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/auth' element={<Authorize />} />
            <Route path='/allprojects' element={<AllProjects />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/postproject' element={<PostProject />} />
        </Routes>
    </Fragment>
  )
}

export default Navigation