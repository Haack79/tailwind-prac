import React from 'react'
import Card from '@/components/Card'
import Button from '@/components/Button'

const page = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center bg-slate-100">Users</h1>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className="flex justify-center mt-5 h-24">
            <Button text="click me"/>
        </div>
    </>
  )
}

export default page
