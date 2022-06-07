import React from 'react'

export default function Perfil() {
  return (
    <div className='profile-container'>

        <div className='profile-parent'>

            <div className='profile-details'>

                <div className='colz'>

                <a href='https://www.linkedin.com/feed/'>
                    <i className='fa fa-facebook-square'></i>
                </a>

                <a href='https://www.linkedin.com/feed/'>
                    <i className='fa fa-google-plus-square'></i>
                </a>
                
                <a href='https://www.linkedin.com/feed/'>
                    <i className='fa fa-instagram'></i>
                </a>
            
                <a href='https://www.linkedin.com/feed/'>
                    <i className='fa fa-youtube-square'></i>
                </a>
                
                <a href='https://www.linkedin.com/feed/'>
                    <i className='fa fa-twitter'></i>
                </a>

                </div>

                <div className='profile-details-name'>

                <span className='primary-text'>
                    {" "}
                    Hola, Soy <span className='highligted-text'>
                    Katherine
                    </span>
                </span>   

                </div>

                <div className='profile-details-role'>

                <span className='primary-text'>

                    {" "}
                    <h1>
                    {" "}

                    

                    </h1>
                    

                </span>

                </div>

            </div>

        </div>

    </div>

        
  )
}
