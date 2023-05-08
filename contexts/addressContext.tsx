import React, { useContext } from 'react'

export const addressContext = React.createContext({
  address: '',
  setAddress: (c: string) => {},
})

export const useAddressContext = () => useContext(addressContext)
