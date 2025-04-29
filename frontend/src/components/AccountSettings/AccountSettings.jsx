import { useState } from 'react'
import { FaArrowLeft, FaCog, FaUser, FaUsers, FaListUl, FaCheck, FaEye, FaEyeSlash } from 'react-icons/fa'
import Sidebar from './Sidebar'
import './AccountSettings.css'

const AccountSettings = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('My Profile')
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  })

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password change logic here
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setShowPasswordForm(false)
  }

  return (
    <div className="account-settings">
      <div className="back-link">
        <a href="#" className="back-btn">
          <FaArrowLeft /> <span>Back</span>
        </a>
      </div>

      <div className="account-header">
        <h2 className="section-title">Account Settings</h2>
        <div className="settings-icon">
          <FaCog />
        </div>
      </div>

      <div className="account-content">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="profile-content">
          <h2 className="profile-title">My Profile</h2>

          {/* Personal Details Section */}
          <section className="profile-section">
            <h3 className="section-subtitle">Personal Details</h3>
            <div className="personal-details">
              <div className="avatar-container">
                <div className="avatar-wrapper">
                  <img 
                    src={userData.avatar} 
                    alt={userData.fullName} 
                    className="avatar-image"
                  />
                  <div className="avatar-edit">
                    <FaUser />
                  </div>
                </div>
              </div>
              <div className="user-info">
                <div className="info-field">
                  <label>Full name</label>
                  <p>{userData.fullName}</p>
                </div>
                <div className="info-field">
                  <label>Email</label>
                  <p>{userData.email}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="profile-section">
            <h3 className="section-subtitle">Security</h3>
            {!showPasswordForm ? (
              <div className="security-section">
                <div className="password-field">
                  <label>Password:</label>
                  <span className="password-dots">••••••••</span>
                </div>
                <button 
                  className="change-password-btn"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Change password
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="password-form">
                <div className="password-input-group">
                  <label>Current password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPasswords.current ? "text" : "password"}
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter current password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => togglePasswordVisibility('current')}
                    >
                      {showPasswords.current ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="password-input-group">
                  <label>New password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPasswords.new ? "text" : "password"}
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => togglePasswordVisibility('new')}
                    >
                      {showPasswords.new ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="password-input-group">
                  <label>Confirm new password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPasswords.confirm ? "text" : "password"}
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => togglePasswordVisibility('confirm')}
                    >
                      {showPasswords.confirm ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="change-password-btn">
                    Change password
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Permissions Section */}
          <section className="profile-section">
            <h3 className="section-subtitle">
              Permissions 
              <span className="settings-gear"><FaCog /></span>
            </h3>
            
            <div className='accountt-wrapper'>
            {userData.accounts.map((account, index) => (
              <div key={index} className="permissions-section">
                <h4 className="account-name">{account.name}</h4>
                
                {account.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="role-container">
                    <div className="role-title">Role: {role.title}</div>
                    <div className="permissions-list">
                      {role.permissions.map((permission, permIndex) => (
                        <div key={permIndex} className="permission-item">
                          <FaCheck className="check-icon" />
                          <span>{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings