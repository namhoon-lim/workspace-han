import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/common/Button'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center pt-10">
      <div className="flex justify-center gap-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      <div className="p-8">
        <Button 
          variant="secondary"
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          count is {count}
        </Button>
        <p className="mt-4 text-gray-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Home
