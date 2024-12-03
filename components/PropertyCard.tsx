'use client'
import { PropertyProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { Bed, Bath, Home, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


// import { Link } from "lucide-react"
const PropertyCard = ({ property }: { property: PropertyProps }) => {
  const { title, location, beds, bathRooms, type, images } = property
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!title && !location && !beds && !bathRooms && !type && images.length === 0) {
    return <>
      <div
        className="w-[350px] h-[400px] bg-gray-300  shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      >

      </div>
    </>
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div >
      <div dir="rtl"
        className="w-[350px] h-[400px] bg-white text-right  shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-1/2 relative">
          <Image
            src={images[0]}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="h-1/2 p-4 flex flex-col bg-blue-50 ">
          <div className="mb-3">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm gap-2 text-gray-600 flex items-center mb-2">
              <MapPin size={16} className="mr-1" /> {location}
            </p>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="flex gap-2 items-center">
              <Bed size={16} className="mr-1" /> {beds} غرفة نوم
            </span>
            <span className="flex gap-2 items-center">
              <Bath size={16} className="mr-1" /> {bathRooms} حمام
            </span>
            <span className="flex gap-2 items-center">
              <Home size={16} className="mr-1" /> {type}
            </span>
          </div>

          <div className='flex items-center justify-between mt-auto'>
              <Link href='properties' className='flex items-center justify-center  text-blue-400'>
                <ChevronRight />
                اكتشف


              </Link>
            </div>
        </div>

      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <DialogContent className="sm:max-w-[600px] ">
          <DialogHeader >

            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{location}</DialogDescription>
          </DialogHeader>

          <div className="relative h-[300px] mb-4">
            <Image
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <Button
              // variant="outline"
              size="icon"
              className="absolute p-6 opacity-70 transition-all duration-150 hover:bg-blue-400 sm:rounded-none left-2 top-1/2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              // variant="outline"
              size="icon"
              className="absolute p-6 opacity-70 transition-all duration-150 hover:bg-blue-400  sm:rounded-none right-2 top-1/2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex gap-2 items-center">
              <Bed className="mr-2" /> {beds} غرف نوم
            </div>
            <div className="flex gap-2 items-center">
              <Bath className="mr-2" /> {bathRooms} حمام
            </div>
            <div className="flex gap-2 items-center">
              <Home className="mr-2" /> {type}
            </div>
          </div>
          <Button asChild className="w-full transition-all duration-100 hover:bg-blue-400 ">
            <Link href={`/properties/${encodeURIComponent(title.trim().replace(/\s+/g, '-'))}`} target="_blank">
              اكتشف المزيد
            </Link>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PropertyCard