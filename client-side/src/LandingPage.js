import React from 'react';
import logo from './logo.svg';
import './App.css';


/* Chatbox module */
import App from './App';

/*Header*/

/* Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css';
/*Questions Set*/



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
    <>
      <div className = " initial-background row ">
        <div className = "col-6 ">
        <div className = "row introduction">
          <p className = "font-weight-bold text-white first-content">

            We are here <br/>
            to help.
          </p>

          <p className = "col-12 font-weight-bold second-content">
           Are you a victim of domestic abuse?<br/>

            Let us help you emotionally and guide you with<br/> legal advice!<br/>
          </p>
          <div className = "col text-center">
          <a className = "btn-custom btn-pink" href = "/chatbot/user" _target = "blank" ><h3>Talk To Us!</h3></a>
          </div>

        </div>

        </div>
        <div className = "col-6 jumping-picture">
        </div>
      </div>
      <div className = "justify-content-center text-center final-content">
         <h1>We understand how difficult it can be for anyone,<br/> regardless of their gender.</h1>
         <div class="row resource">
         <div class="col-4">
         <div className = "content-title-button">
          <a className = "btn-pink-border" href = "/chatbot/user" _target = "blank">TALK TO US</a>
          </div>

          <p>An interactive chatbot that assesses the situation and connects you to a helpline, a professional counselor or a lawyer. You can even just talk it out!    
          </p>

          </div>
         <div class="col-4">
              <div className = "content-title-button">

          <a className = "btn-pink-border">RESOURCES</a>
          </div>

         <p>An information library  regarding the signs of domestic abuse, the steps to take and anything else you might want to know. </p>


         </div>
         <div class="col-4">
         <div className = "content-title-button">
            <a className = "btn-pink-border">FORUM</a>
         </div>

           <p> A support group for connecting to other victims of domestic abuse to create a safe space for personal discussions.</p>
         </div>
         </div>
      </div>
    </>
  );
}
}

export default LandingPage;
