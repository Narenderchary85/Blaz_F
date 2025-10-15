import React from 'react'

const Team = () => {
  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white relative inline-block pb-2">
        Team
         </h2>
        <p className="mt-4 text-lg text-gray-300">Meet our fabulous team who makes dreams come true</p>
      </div>

      <div className=" max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative  rounded-3xl p-8 flex flex-col items-center justify-center">
            <img src="/left.png" alt="" />
        </div>

        <div className="relative  rounded-3xl p-8 flex flex-col items-center justify-center ">
        <img src="/middle.png" alt="" />
        </div>

        <div className="relative  rounded-3xl p-8 flex flex-col items-center justify-center">
        <img src="/right.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Team
