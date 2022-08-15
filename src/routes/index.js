import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import ViewBooks from '../fetaures/books/ViewBooks'
import AddBook from '../fetaures/books/AddBook'
import EditBook from '../fetaures/books/EditBook'

import Footer from '../layouts/Footer'

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/show-books' element={<ViewBooks />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/edit-book' element={<EditBook />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Index