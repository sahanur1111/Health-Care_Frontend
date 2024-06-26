import React, { useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import logo from '../../assets/images/logo.png';  // Make sure to have a logo image in the src directory

const AIChatBot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer(<HashLoader color="#0067FF" size={30} />);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDhRMTIghLZexBD_h30ruUdaI4Jd_qRx2g`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("Error generating response.");
    }
  }

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <img src={logo} alt="Logo" className="h-12 w-12" />
        <h1 className="text-2xl font-bold ml-2">AI Chat Bot</h1>
      </div>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols={5}
        rows={5}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ask me anything..."
      ></textarea>
      <button
        onClick={generateAnswer}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Generate Answer
      </button>
      <div className="mt-4 p-2 bg-gray-100 rounded min-h-[50px] flex items-center justify-center">
        {typeof answer === "string" ? <p>{answer}</p> : answer}
      </div>
    </div>
  );
};

export default AIChatBot;
