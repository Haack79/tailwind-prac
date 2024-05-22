import React from 'react'
import JapanFlag from '@/components/JapanFlag'
import USFlag from '@/components/USFlag'

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 bg-sky-400">
        <USFlag />
        <JapanFlag />
    </div>
  )
}

export default page
