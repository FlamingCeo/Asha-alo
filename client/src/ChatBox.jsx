import React from 'react';
import logo from './logo.svg';
import './App.css';



function QuestionPanel(props) {
 if(props.isQuestion){
 	  return <div className = {props.index > 0? " answer bubble-row  ": "bubble-row  "} index = {props.index} onClick = {props.questionFuntion}>
 	          {props.text}
		     </div>;
 }
 	  return <div className = {props.index > 0? "answer bubble-row animate__animated animate__fadeInRight": "bubble-row animate__animated animate__fadeInRight"} >
 	  		{props.text}

			</div>
}

function showQuestion(isQuestion){

}

function ChatBox(props) {
	//console.log(props);

	var isUser = props.user;
	var isQuestion = props.question.type;
	var list = props.question.text;
  return (
	  <>
	  
		    <div class={isUser === "admin"? "admin d-flex flex-row-reverse": "user d-flex flex-row"}>
		  	  <div class="p-2 m-2">	  	
				  <div className = "avatar">
				  </div>
			  </div>
			  <div class="p-2">
			    	<div className = "flex-column">
					  	<div className = "message-row flex-column">
					  	{
					  		list.map((value, index) => (
					  		<QuestionPanel
					  		 isQuestion = {isQuestion}
					  		 text = {value}
					  		 questionFuntion = {props.questionFuntion}
					  		 index = {index}
					  		/>
					  		))
					  }


					  	</div>
				  	</div>
			  </div>


		
		</div>





	  </>
  );
}

export default ChatBox;
