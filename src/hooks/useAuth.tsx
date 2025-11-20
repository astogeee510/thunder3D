import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (email: string, password: string) => {
    // Demo login - en producción esto sería una llamada API real
    const userData: User = {
      name: email.split('@')[0],
      email,
      isAuthenticated: true,
    };
    setUser(userData);
    return true;
  };

  const register = (name: string, email: string, password: string) => {
    // Demo register - en producción esto sería una llamada API real
    const userData: User = {
      name,
      email,
      isAuthenticated: true,
    };
    setUser(userData);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user?.isAuthenticated ?? false;
  };

  const getCurrentUser = () => {
    return user;
  };

  const updateProfile = (name: string, email: string) => {
    if (user) {
      const updatedUser = {
        ...user,
        name,
        email,
      };
      setUser(updatedUser);
    }
  };

  return {
    user,
    login,
    register,
    logout,
    isAuthenticated,
    getCurrentUser,
    updateProfile,
  };
};
