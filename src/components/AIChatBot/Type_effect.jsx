import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Type_effect = () => {
  return (
    <>
      <ReactTypingEffect
        text={["Welcome to HealthCare Chatbot. Ask me anything!", "Welcome to HealthCare Chatbot. Ask me anything!"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className='font-bold'>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    // style={i%3 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

export default Type_effect;