import React from 'react'
import Add from './components/Add'
import Dashboard from './components/Dashboard'
import Edit from './components/Edit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/add' element={<Add />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;