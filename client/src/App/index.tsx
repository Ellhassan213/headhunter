import React from 'react'
import Header from './Header'
import Project from '../Project'
import ScrollToTop from './ScrollToTop'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <Header />
      <Project />
    </>
  )
}

export default App
