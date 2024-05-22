import React from 'react'

const page = () => {
  return (
    <>
        <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 border border-sky-700 h-dvh">
                {/* Sidebar icon will show on small screen and be hidden on big ones */}
                <div className="px-4 cursor-pointer md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
                {/* Sidebar content hidden when small shows when big */}
                <div className="text-sm mt-6 hidden md:block">  
                    see me when medium to big
                </div>
            </div>
            <div className="md:col-span-2 border border-sky-200">
                <h1 className="text-4xl font-bold text-center bg-slate-100">About</h1>
                <p className="text-center">This is the about page</p>
            </div>
        </div>
        <div className="flex justify-center mt-5 h-24">bottom elements</div>
    </>
  )
}

export default page
