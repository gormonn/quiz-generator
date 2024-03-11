import {useRef,  } from 'react'
import 'app/App.css'

function App() {
    const ref = useRef<HTMLCanvasElement>(null)

  return (
    <div className="flex flex-col gap-3 border-2 rounded-2xl overflow-hidden">
        <canvas ref={ref} className={'w-full h-full bg-gray-600'}/>
    </div>
  )
}

export default App
