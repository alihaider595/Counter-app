import React, { useState } from 'react'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='flex flex-col justify-between items-center p-8 rounded-[30px] w-[320px] h-[350px] bg-[#eeeeee] text-black shadow-2xl'>

      <div className='text-center'>
        <h1 className='text-gray-700 font-bold uppercase text-[18px] mb-2'>
          Counter app        </h1>
        <div className='h-[2px] w-10 bg-gray-300 mx-auto'></div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className={`text-8xl font-black transition-all duration-300 ${count > 0 ? "text-green-600" : count < 0 ? "text-red-600" : "text-gray-800"
          }`}>
          {count}
        </h2>
      </div>

      <div className='w-full space-y-3'>
        <div className='flex gap-3'>
          <button
            onClick={() => setCount(count + 1)}
            className='flex-1 py-4 bg-green-700 text-white rounded-2xl font-bold hover:bg-green-800 active:scale-90 transition-all cursor-pointer'
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className='flex-1 py-4 bg-red-700 text-white rounded-2xl font-bold hover:bg-red-800 active:scale-90 transition-all cursor-pointer'
          >
            -
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className='w-full py-2 bg-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-300 hover:text-black active:scale-95 transition-all text-xs uppercase tracking-tighter'
        >
          Reset Count
        </button>
      </div>

    </div>
  )
}

export default App