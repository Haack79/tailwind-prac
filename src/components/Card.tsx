import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="flex justify-center px-16 py-6 bg-gray-200 text-black rounded overflow-hidden shadow-md m-8 relative hover:bg-gray-400 transition ease-out duration-700">
        <div>
            <span className="text-gray-600 text-xs bg-orange-300 rounded-full p-2 px-3 font-semibold absolute top-0 left-0 m-2 shadow-md hover:shadow-inner">A</span>
        </div>
        <div className="flex flex-col justify-center items-center">
            {/* can make image cover whole card if on top do w-full and object-cover on the image*/}
            <Image src="https://via.placeholder.com/150" alt="placeholder" className="w-32 h-32 rounded-full" width={100} height={150}/>
            <div className="ml-6">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-gray-600 text-sm">description</p>
            </div>
        </div>
    </div>
  )
}

export default Card
