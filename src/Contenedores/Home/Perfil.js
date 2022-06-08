import React, {useState} from 'react';
import Typewriter from "typewriter-effect";




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

                    <h2>
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
                                "Soy egresada de ingeniera de sistemas",
                                "Soy desarrolladora front end",
                                "Soy desarrolladora web"
                            ],
                        }}
                        />
                        
                    </div>     

                </div>

            </div>

        </div>

    </div>

        
  );
};

