import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react'
import './index.css';
//COMPONENTS
import { Earth } from './components/earth/index'


function App() {
  return (

  <div 
   class=
   "flex h-screen w-full bg-gray-900 items-center justify-center"
  >
    <Canvas>
        <Suspense fallback= {null}>
           <Earth />
       </Suspense>
    </Canvas>
  </div>
   );
  }

export default App;