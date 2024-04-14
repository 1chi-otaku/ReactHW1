import React from 'react'
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FruitList from './components/FruitOutput/FruitList';
import FilmList from './components/FilmOutput/FilmList';
import BookList from './components/BooksOutput/BookList';

function App() {
  return (
    <>
    <Router>
      <header>
        <div className='container'>
          <Navigation></Navigation>
        </div>
      </header>

      <main>
        <div className='routeContainer'>
          <Routes>
          <Route path='/fruit' element={<FruitList/>} />
          <Route path='/film' element={<FilmList/>} />
          <Route path='/book' element={<BookList/>} />
            
          </Routes>
        </div>
      </main>

    </Router>
  
    
    
    
    </>
  )
}

export default App
