import React from 'react'

type ButtonProps = {
    text: string
}

const Button = ({text}: ButtonProps) => {
  return (
    <button className="h-8 py-1 px-5 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75 transform hover:scale-125 transition ease-out duration-400">
      {text}
    </button>
  )
}

export default Button
