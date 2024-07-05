import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Button } from './pages/button/button'
import { Input } from './pages/input/input'
import { MainLayout } from './layouts/main-layout'
import { Button1 } from './pages/button/components/button1'
import { Button2 } from './pages/button/components/button2'
import { Button3 } from './pages/button/components/button3'
import { Input1 } from './pages/input/components/input1'
import { Input2 } from './pages/input/components/input2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='button' element={<Button/>}>
          <Route index element={<Button1/>}/>
          <Route path='button2' element={<Button2/>}/>
          <Route path='button3' element={<Button3/>}/>
        </Route>
        <Route path='input' element={<Input/>}>
        <Route index element={<Input1/>}/>
        <Route path='input2' element={<Input2/>}/>
        </Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
