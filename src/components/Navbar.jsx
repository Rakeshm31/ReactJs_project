import React from 'react'
import Logo from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/assets/logo.png"

const MenuData=[
    {
        id:1,
        title:"Home",
        url:"#"
    },
    {
        id:2,
        title:"Youtube Blueprint Course",
        url:"#"
    },
    {
        id:3,
        title:"ChatGPT Course",
        url:"#"
    },
    {
        id:4,
        title:"Time Management Course",
        url:"#",
    },
    {
        id:5,
        title:"E-books",
        url:"#",
    },
]
export default function Navbar() {
  return (
    <nav className="">
        <div className='bg-black/60 backdrop-blur-sm py-3 container rounded-full flex justify-between'>
            {/* Logo Section.*/ }
            <div>
                <img src={Logo} alt="" className="max-w-[120px]" />
            </div>
            {/*Menu Section*/}
            <div>
                <ul className="flex items-center gap-4">
                    {MenuData.map((item)=>{
                        return (
                        <li key={item.id}>
                            <a href={item.url} className='uppercase text-xs'>{item.title}</a>
                        </li>
                        )
                    })}
                    <li>
                        <button className='border border-white px-4 py-1 rounded-full'>Login</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
