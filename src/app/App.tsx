// import {useEffect, useRef, useState,} from 'react'
// import 'app/App.css'
// import {hljs} from "shared/lib/hljs";
import {MainPage} from "pages/main";


function App() {
    return <MainPage/>
  //   const ref = useRef<HTMLElement>(null)
  //   const [code, setCode] = useState(codeV)
  //
  //   useEffect(() => {
  //       // console.log('hljs', hljs);
  //       if(hljs) {
  //           hljs.highlightAll()
  //       }
  //   }, []);
  //
  // return (
  //   <div className="flex flex-col gap-3 border-2 rounded-2xl overflow-hidden text-left">
  //       {/*<canvas ref={ref} className={'w-full h-full bg-gray-600'}/>*/}
  //       <pre>
  //           <code ref={ref} className="language-js">{code}</code>
  //       </pre>
  //   </div>
  // )
}

export default App
