import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/Freelancer/Dashboard'
import AllProjects from '../components/Home/AllProjects'
import Authorize from '../components/Home/Authorize'
import Landing from '../components/Home/Landing'
import PostProject from '../components/Home/PostProject'
import { authActions } from '../store'


const Navigation = () => {

  const Auth = useSelector((state) => state.auth.auth)
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/:type/auth' element={<Authorize />} />
            {Auth && <Route path='/allprojects' element={<AllProjects />} />}
            {Auth && <Route path='/dashboard' element={<Dashboard />} />}
            <Route path='/postproject' element={<PostProject />} />
        </Routes>
    </Fragment>
  )
}

export default Navigation