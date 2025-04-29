import { useState } from 'react'
import Header from './components/Header/Header'
import AccountSettings from './components/AccountSettings/AccountSettings'
import Footer from './components/Footer/Footer'
import './App.css'

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
      <Header />
      <main className="main-content">
        <AccountSettings userData={userData} />
      </main>
      <Footer />
    </div>
  )
}

export default App