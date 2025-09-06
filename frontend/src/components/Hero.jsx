import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src="https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-c49c-61fa-95a2-dde71f1e0879/raw?se=2025-09-06T06%3A34%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=86e8f86f-0150-5da2-975c-d42c3aa4dbd9&skoid=cb94e22a-e3df-4e6a-9e17-1696f40fa435&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-06T05%3A18%3A43Z&ske=2025-09-07T05%3A18%3A43Z&sks=b&skv=2024-08-04&sig=SUAjN6h6GUodhWMZg51w6mD4w6%2BNjtGeKZoo6PihnYY%3D" alt="" />
    </div>
  )
}

export default Hero
