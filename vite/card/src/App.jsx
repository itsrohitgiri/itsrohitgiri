import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from './components/MainLayout'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
function App() {
  const [store, setStore] = useState("");
  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>

            <Route path="/login" element={<Login regDataLogin={store} />}></Route>

            <Route path="/registration" element={<Registration regData={setStore} />}></Route>


          </Route>

        </Routes>

        <Routes>
          <Route path="/dash" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App