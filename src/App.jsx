import {ScrollTrigger, SplitText} from 'gsap/all'
import gsap from 'gsap/gsap-core'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='flex-center h-screen '>
      <h1 className='text-2xl text-indigo-300'>GSAP ~ App</h1>
    </div>
  )
}

export default App