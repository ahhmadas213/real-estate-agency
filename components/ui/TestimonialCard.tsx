import React from 'react'
import { TestimonialProps } from '@/types'
import { Star, Quote, UserCircle } from 'lucide-react';


const TestimoialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  const { name, title, rating, testimony } = testimonial

  return (
    <div className='min-w-[350px]  border border-slate-200 shadow-xl h-[400px] ' dir='rtl'>
      <div className='p-6 flex flex-col h-full' >
        <div className='flex items-center justify-start gap-2'>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
              size={24}
              fill="currentColor"
            />
          ))}
        </div>

        <div className='mt-6 text-gray-600'>
          <p>
            <Quote size={24} className='text-gray-400' />
            {testimony}
          </p>
        </div>
        <div className='mt-auto'>
          <div className='flex items-center gap-2 justify-start mt-auto '>
            <UserCircle />
            <p className='text-lg'>{name}</p>
          </div>
          <p className='text-sm text-gray-400'>
            {title}
          </p>
        </div>

      </div>
    </div>
  )
}

export default TestimoialCard