import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/header'
import Body from '../components/body'
import Wrapper from '../components/wrapper'
import { useAddressContext, addressContext } from '../contexts/addressContext'

const Home: NextPage = () => {
  const [address, setAddress] = useState<string>('')
  return (
    <addressContext.Provider value={{ address, setAddress }}>
      <div className="flex justify-center min-h-screen bg-[rgb(17,18,22)] min-w-min">
        <Wrapper>
          <Header />
          <Body />
        </Wrapper>
      </div>
    </addressContext.Provider>
  )
}

export default Home
