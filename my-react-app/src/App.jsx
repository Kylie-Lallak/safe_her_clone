import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import DataViz from '../src/pages/DataViz';
import Resources from '../src/pages/Resources';



function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dataviz' element={<DataViz />} />
          <Route path='/resources' element={<Resources />} />



        </Routes>
        <Footer />

      </BrowserRouter>


    </>
  )
}

export default App
