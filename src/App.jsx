import React, { useState, useEffect } from 'react'

function App () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])

  return (
    <div className="h-screen">
      <header className="h-full flex flex-col items-center justify-center">
        <img src={'/logo.svg'} className="h-64 mb-12 animate-logo" alt="logo" />
        <p className="m-2">Edit <code className="bg-gray-300 px-2 py-1 rounded-md">src/App.svelte</code> and save to reload.</p>
        <p className="m-2">Page has been open for <code className="bg-gray-300 px-1 py-1 rounded-md">{count}</code> seconds.</p>
        <p className="m-2">
          <a className="text-red-500" href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
            Learn {import.meta.env.SNOWPACK_PUBLIC_PROJECT_NAME}
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
