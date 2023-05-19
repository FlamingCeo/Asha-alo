import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Chatbox module */
import App from './App';


/* Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css';
/*Questions Set*/



class Header extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
    <>
     <div className = "header">
     <div class = "row">
     <div class = "col-6 text-center">
      <span><img src = "https://static.wixstatic.com/media/035244_f65d91d2c6784c938c63ff40b5eb3b14~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01/035244_f65d91d2c6784c938c63ff40b5eb3b14~mv2.webp"/>
      </span>
      <span class = "font-weight-bold logo-title" >
         Ashar Alo
      </span>
     </div>

     <div class = "col-6">
    
      <span class = "header-button" >
      </span>
     </div>
     </div>
     </div>
    </>
  );
}
}

export default Header;
