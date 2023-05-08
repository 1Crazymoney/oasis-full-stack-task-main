import React, { useState } from 'react'
import { ethers } from 'ethers'
import * as service from '../servicies/balances.service'
import useInput from '../hooks/useInput'
import { useEthContext } from '../contexts/ethContext'

const checkBalances = (balances: number[]) => {
  const tmp = balances
  tmp.sort((a: number, b: number) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  })
  if (tmp[0] > 0) return true
  return false
}

const RightSide = () => {
  console.log(process.env)
  const { setAddress, balances } = useEthContext()
  const address = useInput('')
  const [isValid, setIsValid] = useState<boolean>(false)

  const postBalances = () => {
    if (checkBalances(balances) === false) return
    service.post(address.value, balances)
  }

  return (
    <div className="flex flex-col justify-start md:w-3/5 w-full gap-y-8">
      <h2 className="text-2xl">Save account balances</h2>
      <section>
        Provide an Ethereum address to find out balances of DAI, USDC and Maker. Submit them to
        snapshot for future reference. At least one balance must be greater than zero.
      </section>
      <div className="flex flex-col gap-y-5">
        <span>Address</span>
        <textarea
          placeholder="0x2655..0aa9"
          className="rounded-md resize-none h-20 lining-nums bg-[#202124] border-none outline-none"
          spellCheck="false"
          value={address.value}
          onChange={(e) => {
            address.onChange(e)
            setAddress(e.target.value)
            setIsValid(ethers.utils.isAddress(e.target.value))
          }}
        ></textarea>
      </div>

      <button
        disabled={!address.value || !isValid || !balances.length || !checkBalances(balances)}
        className="ease-in-out bg-[#202124] h-12 rounded-xl hover:ease-in hover:duration-100 hover:bg-[#57585d] active:bg-[#2c2d30] active:ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed ..."
        onClick={() => {
          postBalances()
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default RightSide

//   {
//     tag: 'Curve.fi: DAI/USDC/USDT Pool',
//     address: '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7',
//   },
//   {
//     tag: 'Compound: cDAI Token',
//     address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
//   },
//   {
//     tag: 'Aave: aDAI Token V2',
//     address: '0x028171bca77440897b824ca71d1c56cac55b68a3',
//   },
