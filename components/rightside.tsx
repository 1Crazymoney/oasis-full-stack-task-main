import React from 'react'

const RightSide = () => {
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
        ></textarea>
      </div>

      <button className="ease-in-out bg-[#202124] h-12 rounded-xl hover:ease-in hover:duration-100 hover:bg-[#57585d]  active:bg-[#2c2d30] active:ease-in-out duration-300 ...">
        Submit
      </button>
    </div>
  )
}

export default RightSide
