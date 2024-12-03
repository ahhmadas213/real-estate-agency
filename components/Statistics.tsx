import React from 'react'
const statisticData = [

  {
    title: "الاجارات",
    number: "200+"
  },
  {
    title: "المتخصصون",
    number: "13+"
  },
  {
    title: "النمو السنوي",
    number: "78%"
  },
  {
    title: "العقارات",
    number: "300+"
  },
]

const Statistics = () => {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto '>
        <div className='flex items-center justify-between flex-wrap text-white p-8'>
          {statisticData.map((item, index) => (
            <div className='' key={index}>
              <h3 className='text-3xl md:text-5xl'>
                {item.number.slice(0, -1)}
                <span className='text-blue-400'>
                  {item.number.at(-1)}
                </span>
              </h3>
              <p className='text-gray-400'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Statistics