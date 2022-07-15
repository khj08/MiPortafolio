import React from 'react';
import Perfil from './Perfil/Perfil';
import Footer from './Footer/Footer';
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <Perfil/>
        <Footer/>        

    </div>
  )
}
