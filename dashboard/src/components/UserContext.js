import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext({
  user: null,
  loading: true,
  error: null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user info from verify endpoint
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/auth/verify', {
          withCredentials: true
        });
        
        if (response.data.valid && response.data.user) {
          setUser(response.data.user);
          setError(null);
        } else {
          setUser(null);
          setError('Not authenticated');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        setUser(null);
        setError(err.response?.data?.error || 'Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Helper function to get user initials
  const getUserInitials = () => {
    if (!user || !user.name) return 'U';
    const names = user.name.trim().split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  // Helper function to get first name
  const getFirstName = () => {
    if (!user || !user.name) return 'User';
    return user.name.trim().split(' ')[0];
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      loading, 
      error,
      initials: getUserInitials(),
      firstName: getFirstName()
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserContext;



