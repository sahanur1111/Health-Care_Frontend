import React, { useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { FaPaperPlane } from "react-icons/fa";
import logo from "./../../assets/images/icon.png"; // Make sure to have a logo image in the src directory

import "animate.css";
import Type_effect from "./Type_effect";



const AIChatBot = () => {
  const [messages, setMessages] = useState([
    { text: <Type_effect/>, sender: "bot" },
  ]);
  const [loading, setLoading] = useState(false);
  const Api_key = import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT;

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const messageText = e.target.message.value;
    const userMessage = { text: messageText, sender: "user" };
    setMessages([...messages, userMessage]);
    e.target.reset();

    setLoading(true);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${Api_key}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: messageText }] }],
        },
      });
      const botMessage = {
        text: response.data.candidates[0].content.parts[0].text,
        sender: "bot",
      };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Error generating response.",
        sender: "bot",
      };
      setMessages([...messages, userMessage, errorMessage]);
    }
    setLoading(false);
  };

  return (
    <div className="relative flex flex-col h-96 justify-between bg-gradient-to-b from-blue-200 to-blue-300 text-green-500">
      <div className="flex items-center justify-center mb-4 bg-orange-100">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 animate-spin gap-x-10"
        />
        <h1 className="text-3xl font-bold ml-2 underline animate-bounce">
          AI Chat Bot
        </h1>
        <img src={logo} alt="Logo" className="h-12 w-12 animate-spin" />
      </div>
      <div className="flex-grow flex flex-col p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-xs mb-2 ${
              message.sender === "user" ? "self-end" : "self-start"
            } ${
              index === messages.length - 2 || index === messages.length - 1
                ? "bg-blue-500 text-white"
                : message.sender === "user"
                ? "bg-blue-300 text-black"
                : "bg-gray-400 text-white"
            }`}
          >
            {message.text}
          </div>
        ))}
        {loading && (
          <div className="self-start p-2 rounded-lg max-w-xs bg-gray-400 text-white">
            <HashLoader color="#0067FF" size={30} />
          </div>
        )}
      </div>
      <form
        onSubmit={handleMessageSubmit}
        className="flex justify-between p-4 bg-blue-300"
      >
        <input
          type="text"
          name="message"
          placeholder="Type your question..."
          className="flex-grow p-2 mr-2 text-black rounded-lg focus:outline-none"
        />
        <button type="submit" className="p-2 bg-green-600 rounded-lg">
          <FaPaperPlane className="text-white" />
        </button>
      </form>
      <p className="text-sm text-center text-white mt-2">
          Note: AI can make mistakes. Consider checking important
          information.
        </p>
    </div>
  );
};

export default AIChatBot;
