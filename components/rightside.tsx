import React, { useState } from 'react'
import { useAddressContext } from '../contexts/addressContext'
import useInput from '../hooks/useInput'

const RightSide = () => {
  const addressContext = useAddressContext()
  const address = useInput('')

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
          {...address}
        ></textarea>
      </div>

      <button
        onClick={() => {
          addressContext.setAddress(address.value)
          console.log(address.value)
        }}
        className="ease-in-out bg-[#202124] h-12 rounded-xl hover:ease-in hover:duration-100 hover:bg-[#57585d]  active:bg-[#2c2d30] active:ease-in-out duration-300 ..."
      >
        Submit
      </button>
    </div>
  )
}

export default RightSide

// const holders = [
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
// ]
