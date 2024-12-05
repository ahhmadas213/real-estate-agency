import React from 'react';
import { Home, Calendar, FileCheck, RefreshCw } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Home,
      title: "اكتشف المنزل",
      description: "تصفح مجموعتنا المختارة من المنازل عالية الجودة"
    },
    {
      icon: Calendar,
      title: "جدول زيارة",
      description: "احجز وقتًا مناسبًا لزيارة منزلك المحتمل"
    },
    {
      icon: FileCheck,
      title: "شراء بدون متاعب",
      description: "استمتع بعملية شراء سلسة مع دعمنا"
    },
    {
      icon: RefreshCw,
      title: "ضمان إعادة الشراء",
      description: "استمتع براحة البال مع وعد إعادة الشراء"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-2 " dir="rtl">
      <div className="relative">
        {/* Mobile Layout */}
        <div className="flex flex-col space-y-6 sm:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center  space-x-4 space-x-reverse">
              <div className="flex-shrink-0">
                <div className={`flex items-center justify-center w-12 h-12 ${index === 0 ? "bg-blue-400" : "bg-white"}`}>
                  <step.icon className={`w-6 h-6 ${index === 0 ? "text-white" : "text-black"}`} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:block">
          {/* Connecting lines container */}
          <div className="absolute top-8 right-0 left-0 mx-16 lg:mx-24">
            <div className="h-0.5 bg-white w-full" />
          </div>

          <div className="flex justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative w-1/4 px-4">
                {/* Icon circle */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16   mb-4 ${index === 0 ? "bg-blue-400" : "bg-white"}`}>
                  <step.icon className={`w-8 h-8 ${index === 0 ? "text-white" : "text-black"}`} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 max-w-[200px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;