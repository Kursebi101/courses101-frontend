import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import userService from '../services/user.service'

const initialAuthData = {
  login: () => { },
  logout: () => { },
  user: {
    username: '',
    avatar: '',
    roleType: 1
  }
}

const AuthContext = createContext(initialAuthData)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, [])

  const login = async (data) => {
    setUser(data)
  }

  const logout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('access_token')
    setUser(null);
  }

  const checkUser = async () => {
    let access_token = localStorage.getItem('access_token');

    if(!access_token) return;

    let result = await userService.getUser();
    if (result.data.code === 'user/found') {
      setUser(result.data.data);
    }
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
