import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AccountSettings from './components/AccountSettings/AccountSettings'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import './App.css'
import PrivateRoute from './components/Privateroutes'

function App() {
  const [userData] = useState({
    fullName: 'Joleen Collins',
    email: 'joleencollins@karleragroup.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    accounts: [
      {
        name: 'Account name (1)',
        roles: [
          { title: 'Super Admin', permissions: ['Account', 'Provider'] },
          { title: 'Admin', permissions: ['Listings', 'Banners'] }
        ]
      },
      {
        name: 'Account name (2)',
        roles: [
          { title: 'Super Admin', permissions: ['Account', 'Provider'] },
          { title: 'Admin', permissions: ['Listings', 'Banners'] }
        ]
      }
    ]
  })

  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          <Route path="/" element={localStorage.getItem('token') ? (
        <Navigate to="/account-settings" replace />
      ) : (
        <Navigate to="/login" replace />
      )} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-settings" element={  <PrivateRoute>
        <AccountSettings userData={userData} />
      </PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App