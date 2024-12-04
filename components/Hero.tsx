import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {

  
  return (
    <div className='min-h-[90vh] flex  pt-[200px]  justify-center bg-blend-overlay bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: 'url(/hero-image.jpg)' }}
    >

      <div className='container mx-auto'>

        <div className='text-white text-center mb-6'>
          <h1 className='text-4xl font-semibold md:text-6xl  mb-4'>
            ابحث عن بيت احلامك
          </h1>
            <p className='text-lg md:text-2xl text-gray-200'>
            نحن ندرك حقيقة أن الأشخاص المعاصرين يسعون جاهدين لتحقيق أقصى قدر من الراحة.
            </p>
        </div>

    {/* serach bar */}
        <SearchBar />

      </div>

    </div>
  )
}

export default Hero