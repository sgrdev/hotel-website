// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FrontPage from './Pages/Frontpage';
// import RoomsandRate from './Pages/RoomsandRate';
// import Facilities from './Pages/Facilities';
// import Contact from './Pages/Contact';



const App = () => {
  return (
    <>
      <FrontPage />
      {/* <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/about' element={<RoomsandRate />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/contact' element={<Contact />} />
          </Routes>
      </Router> */}

    </>
  )
}

export default App