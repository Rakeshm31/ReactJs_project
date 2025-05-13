import React from 'react'
import Brand1 from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/components/brand/brand1.svg"
import Brand2 from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/components/brand/brand2.svg"
import Brand3 from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/components/brand/brand3.svg"
import Brand4 from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/components/brand/brand4.svg"
import Brand5 from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/components/brand/brand5.svg"

const Brand = () => {
  return (
    <>
      <section className='bg-[#141414]'>
        <div className="container flex justify-around py-4 flex-wrap gap-6">
            <img src={Brand1} alt="" className='max-w-[100px'/>
            <img src={Brand2} alt="" className='max-w-[100px'/>
            <img src={Brand3} alt="" className='max-w-[100px'/>
            <img src={Brand4} alt="" className='max-w-[100px'/>
            <img src={Brand5} alt="" className='max-w-[100px'/>
        </div>
      </section>
    </>
  )
}

export default Brand
