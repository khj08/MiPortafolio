import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import './Perfil.css';

export default function Perfil() {
  const [state] = useState({
      title: "Hola, ",
      titleTwo: "Soy",
      titleThree: "Katherineee",


  });

  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>

                <div className='colz'>

                    <div className='colz-icon'>
                        <a href='https://www.linkedin.com/feed/'>
                            <i className='fa-brands fa-facebook-square'></i>
                        </a>

                        <a href='https://www.linkedin.com/feed/'>
                            <i className='fa-brands fa-google-plus-square'></i>
                        </a>
                        
                        <a href='https://www.linkedin.com/feed/'>
                            <i className='fa-brands fa-instagram'></i>
                        </a>
                    
                        <a href='https://www.linkedin.com/feed/'>
                            <i className='fa-brands fa-youtube-square'></i>
                        </a>
                        
                        <a href='https://www.linkedin.com/feed/'>
                        <i className='fa-brands fa-twitter'></i>
                        </a>
                    </div>
                    
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
                        <h2>
                            {" "}
                            <div className='title'>{state.title}</div>
                            <div className='titleTwo'>{state.titleTwo}</div>
                            <div className='titleThree'>{state.titleThree}</div>
                        </h2>       

                        <div className='text-typewriter'>

                            <Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                                delay:40,
                                strings:[
                                    "Soy egresada de ingeniera de sistemas ????   ",
                                    "Soy desarrolladora front end",
                                    "Soy desarrolladora web"
                                ],
                            }}
                            />
                            
                        </div>                      
                    </span>

                    <span className='profile-role-tagline'>
                        Descripci??n del perfil, de la web.
                        Descripci??n del perfil, de la web.
                        Descripci??n del perfil, de la web.
                    </span>                    

                </div>

                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Cont??ctame
                        {" "}
                    </button>
                    <a href='CV-HUAMANYAURI.pdf' download="KatherineHuamanyauri.pdf">
                        <button className='btn highlighted-btn'>Mi CV</button>
                    </a>
                </div>

            </div>

            <div className='profile-picture'>
                <div className='profile-picture-background'>
                </div>            
            </div>       

        </div>
    </div>

        
  );
};

