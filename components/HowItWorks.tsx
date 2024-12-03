import React from 'react'
import ProcessTimeline from './ui/ProcessTimeLine'
import Link from "next/link"
import { ChevronRight } from 'lucide-react'
const HowItWorks = () => {
  return (
    <div className='min-h-[80vh] py-24 flex items-center justify-center w-full bg-primary -mt-[30vh]'>
      <div className=' container  pt-[20rem] mx-auto px-6'>
        <h1 className='text-white font-bold md:text-center md:text-4xl mb-6 text-2xl'>كيف نعمل</h1>
        <ProcessTimeline />
        <div className='w-full max-h-[400px] overflow-hidden p-6 flex items-center justify-center md:justify-start bg-white mt-6 bg-cover bg-center'
          style={{ backgroundImage: "url(/property/p1.jpg)" }}
        >
          <div className='bg-white  w-[350px]  h-full p-8'>
            <h2 className='text-lg font-bold'>
              اعثر على البيت المناسب لك
            </h2>

            <p className='text-sm text-gray-400 mt-4'>
              اعثر على البيت المناسب لك بسهولة مع منصتنا التي توفر لك تجربة بحث متكاملة تلبي جميع احتياجاتك. سواء كنت تبحث عن منزل في المدينة أو الريف، صغير أو كبير، يمكنك تصفح مجموعة واسعة من الخيارات المصممة لتناسب ميزانيتك وأسلوب حياتك.
            </p>


            <div className='flex items-center justify-between mt-8'>
              <Link href='properties' className='flex items-center justify-center  text-blue-400'>
                <ChevronRight />
                اكتشف


              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowItWorks