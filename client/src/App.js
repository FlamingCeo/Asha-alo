import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Chatbox module */
import ChatBox from './ChatBox';


/* Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css';
/*Questions Set*/

import {questions, appendAnswer,links} from './json'

/*Socket Connection*/
import socketIOClient from "socket.io-client";


var list = [

  {
    user: "admin",
    question: questions[0]
  },

];

const socket = socketIOClient("http://localhost:4000/");



var current_question_index = 0; 
class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      questions: list,
      name: "Jane joe",
      usertype: "",
      showHelpBlock: false,
      userTypePanel: false
    };
  }

questionFuntion=(e)=>{
  // alert("hi");
  var index = e.target.getAttribute("index");
  if(current_question_index ==0){

    current_question_index = current_question_index +1;
    var newQuestion =
      {
        user: "admin",
        question: questions[current_question_index]
      };
    
     var set = this.state.questions;
     set.push(newQuestion);
     this.setState({
      questions: set
     })

  }

  if(current_question_index ==4){
    if(index != "0" ){
     var newQuestion =
     {
      user: "admin",
      question: appendAnswer(links[index])
    };
    var set = this.state.questions;
    set.push(newQuestion);
    this.setState({
      questions: set
    })
    socket.emit("needCounseller", this.state.name);
  }

}

}

handleInput = async(e) =>{
  this.setState({
    message: e.target.value
  })

  if(current_question_index ==1){
    await this.setState({
     name: e.target.value
   })

  }
}

handleSubmit = async (e) =>{
  e.preventDefault();
  //alert("submit!");
     if(current_question_index >=4 || this.state.usertype =="admin")
  {

      var sendMessage = {
        user: this.state.usertype,
        messages: this.state.message
      }
      socket.emit("message",sendMessage);
  }
  else{

    var newQuestion =
      {
        user: "user",
        question: appendAnswer(this.state.message)
      };
    
     var set = this.state.questions;
     set.push(newQuestion);
     await this.setState({
      questions: set,
     })

  console.log(current_question_index);
  if(current_question_index <= 3 && current_question_index!=0)
  {

    current_question_index = current_question_index +1;
    var setNames = questions[current_question_index];
    setNames["text"][0] =  this.state.name +","+ setNames["text"][0];
    //console.log(setNames);

    var newQuestion =
      {
        user: "admin",
        question: setNames
      };
    
     var set = this.state.questions;

setTimeout(async () =>{
  console.log("hi");

          set.push(newQuestion);

       await this.setState({
      questions: set
     })


}, 1000);

  }

  }
    await this.setState({
      message: ""
     }) 

  }


  confirmHelp=()=>{
    socket.emit("acceptHelp","Dr.Sarah Khan");
    this.setState({
      showHelpBlock: false
    })
  }


  userType=(e)=>{
    console.log(e.target.getAttribute("type"));
    this.setState({
      usertype: e.target.getAttribute("type"),
      userTypePanel: false
    })

    if(e.target.getAttribute("type") === "admin"){
      this.setState({
        questions: []

      })
    }





  }
   componentWillMount(){
     this.setState({
      usertype: this.props.match.params.id
    })


    if(this.props.match.params.id === "admin"){
      this.setState({
        questions: []

      })
    }

    socket.on("chat", (data) => {
    var set = this.state.questions;
     set.push(data);
     this.setState({
      questions: set
     })
    })
    socket.on("needHelp", (data) => {
      console.log("receiving");
      console.log(this.state.usertype);
      if(this.state.usertype == "admin"){
        alert("Someone is asking for help!");
        this.setState({
          showHelpBlock: true,
          name: data
        })

      }})




  

    socket.on("connectedToCounseller", (data) => {

    var setNames = {
      text: [],
      type: false
    };

    var username = this.state.usertype ==="user"? data: this.state.name;
    setNames["text"][0] =  "You are connected to "+ username + ". You can  talk about your concern with "+ username;
    //console.log(setNames);

    var newQuestion =
      {
        user: "admin",
        question: setNames
      };
    
     var set = this.state.questions;
     set.push(newQuestion);
     this.setState({
      questions: set
     })


    })

  }

render() {
    return (
    <>

     {
      this.state.userTypePanel?
      <div >
        <a type = "user" onClick ={this.userType}>User </a>
        <a type = "admin" onClick ={this.userType}>Counseller </a>

      </div>
      :  <div className="container chatboxblock">


         {
          this.state.showHelpBlock && <div className = "helpMessage">
          <div>{this.state.name} need your help. Do you want to talk to her?</div>
            <div><a class = "btn btn-primary" onClick = {this.confirmHelp}>Ok</a></div> 
         </div>
         }
          <div className = "wrap">
              <div className = "chat-window">
                 <div className = "chat-header d-flex justify-content-center text-center ">

                   <span>{this.state.usertype ==="user"?"Help and Support": "Counseller Consultion"}</span>
                 </div>

                
                {this.state.questions.map((value, index) => (
                  <ChatBox
                    {...value}
                    questionFuntion = {this.questionFuntion}

                  />
                ))}

            
              
              </div>
          </div> 
        <div className = "messaging-tool">
          <form onSubmit={this.handleSubmit}>
            <input className = "form-control" value = {this.state.message} onChange = {this.handleInput} placeHolder = "Type here.........." />
          </form>
      </div>
      
      </div>
    }
    </>
  );
}
}

export default App;
