import React, { useEffect, useState, useRef } from 'react'
import { getMainnetSdk } from '@dethcrypto/eth-sdk-client'
import { ethers } from 'ethers'
import Image from 'next/image'
import { useAddressContext } from '../contexts/addressContext'

const items = [
  { name: 'DAI', src: '/dai_circle_color.svg' },
  { name: 'USDC', src: '/usdc_circle_color.svg' },
  { name: 'MKR', src: '/maker_circle_color.svg' },
]

const infuraProjectId = 'd9034025e9b94714bd497b25c64078ed'
const mainnetProvider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${infuraProjectId}`,
)
const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider)
const { dai, USDC, MKR } = getMainnetSdk(defaultSigner)

const tokenBalances = async (
  address: string,
  setBalances: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  const daiBalance = await dai.balanceOf(address)
  const usdcBalance = await USDC.balanceOf(address)
  const makerBalance = await MKR.balanceOf(address)

  setBalances([
    ethers.utils.formatUnits(daiBalance.toString(), 18),
    ethers.utils.formatUnits(usdcBalance.toString(), 18),
    ethers.utils.formatUnits(makerBalance.toString(), 18),
  ])
}

type ItemProps = {
  id: number
  balance: string
}

const Item = (props: ItemProps) => {
  const { id, balance } = props
  return (
    <div className="flex flex-row justify-between gap-x-5">
      <div className="flex gap-x-3">
        <Image src={items[id].src} width="50" height="50" />
        <span>{items[id].name}</span>
      </div>
      <div className="flex gap-x-3 w-full">
        <input className="bg-transparent text-right w-full" type="text" value={balance} readOnly />
        <p>{items[id].name}</p>
      </div>
    </div>
  )
}

const LeftSide = () => {
  const { address } = useAddressContext()
  const [balances, setBalances] = useState<string[]>(['', '', ''])

  useEffect(() => {
    if (address) tokenBalances(address, setBalances)
  }, [address])

  return (
    <div className="flex flex-col md:w-2/5 w-full gap-y-5">
      <h2 className="text-2xl">Token balences</h2>
      {[0, 1, 2].map((item) => {
        return <Item id={item} balance={balances[item]} key={item} />
      })}
    </div>
  )
}

export default LeftSide
