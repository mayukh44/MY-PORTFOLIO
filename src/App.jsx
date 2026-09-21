import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home.jsx'
import { Toaster } from './components/ui/toaster.jsx'

function App() {

  return (
    <div className='select-none pointer-events-none'>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

    <Toaster/>
    </div>
  )
}

export default App
