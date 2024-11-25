import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import MeetTheFounder from './pages/MeetTheFounder/MeetTheFounder'
import Blogs from './pages/Blogs/Blogs'
import Layout from './Layout'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/meet-founder' element={<MeetTheFounder />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
