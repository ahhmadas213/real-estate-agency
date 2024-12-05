'use client'
import React from 'react'
import SearchBar from './SearchBar'
import { motion } from "framer-motion";

const Hero = () => {


  return (
    <div className='min-h-[60vh] md:min-h-[90vh] flex  pt-[200px]  justify-center bg-blend-overlay bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: 'url(/hero-image.jpg)' }}
    >

      <div className='container mx-auto'>

        <div className='text-white text-center mb-6'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl font-semibold md:text-6xl  mb-4'>
            ابحث عن بيت احلامك
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, }}
            className='text-lg md:text-2xl text-gray-200'>
            نحن ندرك حقيقة أن الأشخاص المعاصرين يسعون جاهدين لتحقيق أقصى قدر من الراحة.
          </motion.p>
        </div>

        {/* serach bar */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >

          <SearchBar />


        </motion.div>


      </div>

    </div>
  )
}

export default Hero