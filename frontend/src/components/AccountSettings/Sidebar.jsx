import { FaUser, FaUsers, FaListUl } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ activeTab, setActiveTab }) => {
  const sidebarItems = [
    {
      title: 'My Profile',
      icon: <FaUser />
    },
    {
      title: 'Users',
      icon: <FaUsers />
    },
    {
      title: 'Account List',
      icon: <FaListUl />
    }
  ]

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {sidebarItems.map((item, index) => (
          <li 
            key={index} 
            className={`sidebar-item ${activeTab === item.title ? 'active' : ''}`}
            onClick={() => setActiveTab(item.title)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar