import React from "react";
import { useSelector } from "react-redux";

const Messages = () => {
    const messages = useSelector(state => state.chatbot.messages)
    console.log("messages", messages);

    const displayMessage = (message, index) =>{
    if(message.speak === "user"){
      return <div key={index} className='messages__user'>
        <p className='messages_text-user'>{message.text}</p>
      </div>
    }else if (message.speak === "bot"){
      return <div key={index} className='messages__df'>
      <p className='messages_text-df'>{message.text}?</p>
    </div>
    }
  }
  return (
    <div className="messages">
      { messages.map((message, index)=>{
        return displayMessage(message, index)
      })}
    </div>
  );
}
export default Messages;
