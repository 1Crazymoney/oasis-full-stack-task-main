import React from 'react'
import Image from 'next/image'

type ItemProps = {
  id: number
}

const items = [
  { name: 'DAI', src: '/dai_circle_color.svg' },
  { name: 'USDC', src: '/usdc_circle_color.svg' },
  { name: 'MKR', src: '/maker_circle_color.svg' },
]

const Item = (props: ItemProps) => {
  const { id } = props
  return (
    <div className="flex flex-row justify-between gap-x-5">
      <div className="flex gap-x-3">
        <Image src={items[id].src} width="25" height="25" />
        <span>{items[id].name}</span>
      </div>
      <div className="flex gap-x-3 w-full">
        <input className="bg-transparent text-right w-full" type="text" placeholder="---" />
        <p>{items[id].name}</p>
      </div>
    </div>
  )
}

const LeftSide = () => {
  return (
    <div className="flex flex-col md:w-2/5 w-full gap-y-5">
      <h2 className="text-2xl">Token balences</h2>
      {[0, 1, 2].map((item) => {
        return <Item id={item} key={item} />
      })}
    </div>
  )
}

export default LeftSide
