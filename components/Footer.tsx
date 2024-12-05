import { ChevronLeft, Facebook, Instagram, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { quickLinks } from '@/lib/data'

const Footer = () => {
  return (
    <footer className='min-h-[500px] text-white bg-primary py-20'>
      <div className='container mx-auto px-6'>
        {/* introduction */}
        <div className='flex justify-between gap-2 md:items-center '>
          <h2 className='text-xl md:text-3xl font-bold'>
            الرؤية للعقارات
          </h2>

          <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
            <Link href="/properties" className='py-2 px-4 text-sm text-center bg-blue-400  hover:bg-white hover:text-black transition-all duration-150' target='_blank'>
              البحث عن العقارات
            </Link>
            <Link href="/properties" className=' text-gray-400 hover:text-white underline transition-all duration-150' target='_blank'>
              اكتشف بيت احلامك
            </Link>
          </div>
        </div>

        {/* breack line */}
        <div className='h-[1px] w-full my-10  bg-gray-400' />

        {/* navigation */}
        <div className='flex flex-col  md:flex-row justify-between gap-8'>
          {/* email section */}
          <div className='min-w-[320px]'>
            <div>
              <h3 className='text-xl md:text-3xl'>
                هل انت مالك منزل؟
              </h3>
              <p className='text-sm text-gray-400 mt-4'>
                ضع بريدك الإلكتروني واحصل على القائمة
              </p>
            </div>
            <div className='mt-8  md:w-full '>
              <form action="" className='flex items-center h-12 gap-4 '>
                <input placeholder='البريج الاكتروني' type="text" className='h-full text-sm w-2/3 md:flex-1 border-b border-gray-400 bg-transparent  focus:outline-none ' />
                <button type='submit' className=' bg-white h-full hover:bg-gray-200 transition-all duration-150 outline-none  p-5 flex items-center justify-center border-gray-600 '>
                  <ChevronLeft className="h-6 w-6 text-black " />
                </button>
              </form>
            </div>
          </div>

          {/* quick links */}

          <div className='flex mt-10 md:mt-0 items-center gap-20'>
            <div>

              <h3 className='text-xl'>استكشاف</h3>
              <ul>
                {quickLinks.explore.map((link, index) => (
                  <li key={`explore-${index}`} className='text-sm text-gray-400 mt-3'>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-xl'>الخدمات</h3>
              <ul>
                {quickLinks.services.map((link, index) => (
                  <li key={`services-${index}`} className='text-sm text-gray-400 mt-3'>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>



        </div>

        {/* bottom */}
        <div className='flex mt-20 flex-wrap gap-10 md:gap-0  items-center justify-between'>

          {/* social icon */}
          <div className='flex items-center gap-5'>
            <Link href="/">
              <X />
            </Link>
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
          </div>

          {/* copy rights */}
          <div>
            <p className='textt-sm text-gray-400'>
              © <span>&#169;</span> {new Date().getFullYear()} الرؤية للعقارات. جميع الحقوق محفوظة.</p>
          </div>

          <div className='flex items-center gap-8'>
            <Link href="/" className='text-sm text-gray-400'>
              الشروط والأحكام
            </Link>
            <Link href="/" className='text-sm text-gray-400'>
              سياسة الخصوصية
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer