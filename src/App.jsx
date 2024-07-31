import React from 'react'
import TopBarComponent from './components/TopBarComponent'
import StudentListComponent from './components/StudentListComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUserComponent from './components/AddUserComponent'
import EditUserComponent from './components/EditUserComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBarComponent />
        <Routes>
          <Route path='/' element={<StudentListComponent />} />
          <Route path='/add_user' element={<AddUserComponent />} />
          <Route path='/edit/:id' element={<EditUserComponent />} />
        </Routes>
      </BrowserRouter >
    </>

  )
}

export default App