'use client'
import AnimatedCarousel from './ui/AnimatedCarousel'
import TestimoialCard from './ui/TestimonialCard'
import { testimonials } from '@/lib/data'
const Testimonials = () => {
  return (
    <div className='py-24'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl'>
          وهنا بعض الكلمات من عملائنا
        </h2>

        <div dir="ltr" className='mt-24'>
          <AnimatedCarousel>
            {testimonials.map((testimony, index) => (
              <TestimoialCard testimonial={testimony} key={index} />
            ))}
          </AnimatedCarousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials