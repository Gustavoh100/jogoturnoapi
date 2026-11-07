import { Route, Routes } from 'react-router-dom'
import './App.css'
import Jogada from './pages/Jogada'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Jogada />} />
      </Routes>

    </>
  )
}

export default App
