import React from 'react'
import Bgimg from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/assets/Bgimg.png"
import hero from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/assets/hero.png"
import learners from "/home/rakesh-maddineni/Desktop/ReactJS/Selling_project/src/assets/learners.png"
import Navbar from '../Navbar'

const bgstyle={
    backgroundImage:`url(${Bgimg})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
};

const Hero = () => {
  return (
    <>
    <section style={bgstyle} className='p-5'>
      <div>
      <Navbar/>
      </div>
        <div className="container min-h-[600px] grid grid-cols-1 md:grid-cols-2">
            {/* Text Content section*/}
            <div className='flex flex-col justify-center gap-4 h-full'>
                <h1 className='uppercase text-3xl md:text-4xl font-extrabold'>LEARN WHAT SCHOOL DOESN'T TEACH YOU</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad dolor beatae sunt excepturi ipsam ex voluptatem
                    , nulla sed dolores praesentium obcaecati 
                    fuga quasi nisi placeat numquam. Quaerat, natus excepturi!
                </p>
                <div className='bg-white text-red-500 px-6 py-2
                rounded-full uppercase font-bold'>
                <button>Explore Courses</button>
                </div>
                {/*review section*/}
                <div className="flex items-center gap-4">
                  <img src={learners} className='max-w-[1200px]'/>
                  <div className='opacity-50'>
                    <p>10000+</p>
                    <p className='text-xs'>Happy Learners</p>
                  </div>
                    <div>
                      <p className='text-sm'>4.9+(600+ Ratings)</p>
                      <div>Stars</div>
                    </div>
                 
                </div>
            </div>
            {/*hero image section*/}
            <div className='flex justify-center items-end'>
              <img src={hero} />
            </div>
            
            
        </div>
    </section>
    </>
  )
}

export default Hero
