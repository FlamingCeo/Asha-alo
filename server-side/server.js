// ;==========================================
// ; Title:  Real Time Communication
// ; Author: Sarah Khan
// ; Date:   16/07/2020
// ;==========================================
const express = require('express');
var app = express();
const PORT = process.env.PORT || 4000;
var http_ser = app.listen(PORT, handleServer);
var io = require('socket.io')(http_ser);

io.on('connection',handleIO); // when an user connection to socket specified
function handleIO(socket){ // anything that needed to be handled after socket connection
    //io.emit("needHelp","sarah");
  function handleUserType(data){
    console.log(data);

    var element = 
    { text: 
      [
        data.messages
      ],

      type: false
    }

    var newQuestion =
     {
      user: data.user,
      question: element
    };

      io.emit("chat",newQuestion);


  }

  function notifycounseller(data){
    console.log("got the info here");

       io.emit("needHelp",data);

  }

  function handleSession(data){
    io.emit("connectedToCounseller", data);
  }

   socket.on("message",handleUserType);
   socket.on("needCounseller", notifycounseller);
   socket.on("acceptHelp",handleSession);


}

function handleServer(){
}

