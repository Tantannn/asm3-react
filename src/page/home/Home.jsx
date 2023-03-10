import Banner  from '../component/Home/Banner'
import React from 'react'
import NavBar from '../component/Layout/NavBar'
import Footer from '../component/Layout/Footer'
import Collections from '../component/Home/Collections'
import FooterAbove from '../component/Home/FooterAbove'
import Category from '../component/Home/Category'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Category/>
      <Collections />
      <FooterAbove/>
      <Footer />
    </div>
  )
}

export default Home
