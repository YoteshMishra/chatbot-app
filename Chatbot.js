import React, { useState } from "react";
import "./Chatbot.css";
import Messages from "./Messages";
import { useDispatch } from "react-redux";
import * as chatbotActions from "../../store/actions/chatbotActions";

const Chatbot = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const handleUserQuery = async() => {
    if (query === "") {
      alert("please enter your query");
      return;
    }
    const data = {
      text: query,
    };
    dispatch(chatbotActions.textQueryAction(data));
    setQuery("");
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h1 className="chatbot-header-text">MyChatBot</h1>
        <button className="chatbot-header-btn">
          <span>&#10060;</span>
        </button>
      </div>
      <div className="chatbot-body">
        <Messages />
      </div>
      <div className="chatbot-footer">
        <input
          className="chatbot-footer-input"
          type="text"
          value={query}
          placeholder="type here"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="chatbot-footer-btn glow-on-hover"
          onClick={() => handleUserQuery()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
