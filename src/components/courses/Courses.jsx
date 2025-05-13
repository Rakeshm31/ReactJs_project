import React from 'react'
import CourseCard from './CourseCard'

function Courses() {
  return (
    <>
      <section className='py-12 md:py-24'>
        <div className='container'>
          <div className='text-center'>
            <p className='text-sm'>Courses</p>
            <p className='text-3xl md:text-4xl font-extrabold'>BECOME SKILL AT WHAT MATTER</p>
          </div>

          {/*courses */}
          <CourseCard/>
        </div>
      </section>
    </>
  )
}

export default Courses
