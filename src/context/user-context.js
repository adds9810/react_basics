import { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext()

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(window.localStorage.getItem('USER') || 'null')
  })

  useEffect(() => {
    if (user == null) {
      window.localStorage.removeItem('USER')
    } else {
      window.localStorage.setItem('USER', JSON.Sstringify(user))
    }
  }, [user])

  return (
    <Context.Provider varlue={{ user, setUser }}>{children}</Context.Provider>
  )
}

export const useUserContext = () => {
  return useContext(Context)
}
