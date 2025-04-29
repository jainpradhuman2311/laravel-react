import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

// Create the authentication context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state from localStorage on component mount
  useEffect(() => {
    const initializeAuth = () => {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
      
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
      
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Get CSRF cookie first (required by Sanctum)
      await api.get('/sanctum/csrf-cookie');
      
      // Send login request
      const response = await api.post('/api/login', { email, password });
      
      // Extract user and token from response
      const { user: userData, token: authToken } = response.data;
      
      // Save to state
      setUser(userData);
      setToken(authToken);
      
      // Save to localStorage for persistence
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', authToken);
      
      return { user: userData, token: authToken };
    } catch (err) {
      const errorMessage = 
        err.response?.data?.message || 
        err.message || 
        'An error occurred during login';
      
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    
    try {
      // Call logout endpoint
      await api.post('/api/logout');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Clean up state and localStorage regardless of API call result
      setUser(null);
      setToken(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setIsLoading(false);
    }
  };

  // Function to get current user data
  const getCurrentUser = async () => {
    if (!token) return null;
    
    try {
      const response = await api.get('/api/user');
      const userData = response.data;
      
      // Update stored user data
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      return userData;
    } catch (err) {
      console.error('Error fetching user data:', err);
      return null;
    }
  };

  // Context value
  const value = {
    user,
    token,
    isLoading,
    error,
    isAuthenticated: !!user,
    login,
    logout,
    getCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
