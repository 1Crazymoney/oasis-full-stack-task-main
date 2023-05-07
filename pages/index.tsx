import type { NextPage } from 'next'

import Header from '../components/header'
import Body from '../components/body'
import Wrapper from '../components/wrapper'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-[rgb(17,18,22)] min-w-min">
      <Wrapper>
        <Header />
        <Body />
      </Wrapper>
    </div>
  )
}

export default Home
