import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Page/HomePage'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Wrapper from './Component/launch/Wrapper'

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/launch' element={<Wrapper/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
