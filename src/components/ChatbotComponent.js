import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { FaComments } from 'react-icons/fa';
import Particle from './Particle';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);
  const genAIRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    genAIRef.current = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    modelRef.current = genAIRef.current.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Dynamic chatbox height based on message count
  const getChatboxHeight = () => {
    const baseHeight = 240; // Minimum height
    const messageHeight = 48; // Approx height per message
    const maxHeight = 480; // Maximum height
    const calculatedHeight = baseHeight + messages.length * messageHeight;
    return Math.min(calculatedHeight, maxHeight);
  };

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setIsLoading(true);

      try {
        const context = `
       You are Arpit Mishra, explaining your portfolio as if you're directly talking to the user.
Your tone should be casual, friendly, but smart.

- Projects: 
  - **Portfolio Website**: A responsive React-based portfolio website with various effects.
  - **Rock-Paper-Scissors**: A game built with a friend.
  - **Chatbot**: A React-based chatbot.
  - **AI for Personal Tasks**: An AI built with Python for voice recognition to help with basic tasks.
  - **Desktop Cleaner**: A Python-based desktop cleaner that organizes files by their location into new folders.
  - **Tic-Tac-Toe Game (Java)**: A basic Java-based Tic-Tac-Toe game where two players input coordinates to play.
  
- Skills: You can say "I work with React, JavaScript, Flask, Python, Java, etc."
- Resume: You should suggest "You can download my resume here: /resume.pdf."
- Contact: You can say "To get in touch with me, email me at arpittmishraa@gmail.com or connect with me on LinkedIn."  

Keep the replies short, helpful, and natural — as if you're typing them yourself.
      `;

        const prompt = `${context}\nUser asked: ${input}`;
        const result = await modelRef.current.generateContent(prompt);
        const botResponse = await result.response.text();

        setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
      } catch (error) {
        console.error('Error with Gemini API:', error);
        setMessages((prev) => [
          ...prev,
          { text: 'Kuch gadbad ho gaya, try again!', sender: 'bot' },
        ]);
      }

      setIsLoading(false);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 500,
      fontFamily: "'Inter', sans-serif",
    }}>
      <Particle id="particles-js" />

      {/* Chat Toggle Button */}
      <div
        style={{
          background: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
        }}
      >
        <FaComments size={22} color="white" />
        <span style={{
          position: 'absolute',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          animation: isOpen ? 'none' : 'ripple 0.6s ease-out',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            width: '300px',
            marginTop: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            padding: '20px',
            animation: 'slideIn 0.4s ease-in-out',
            transition: 'height 0.4s ease, transform 0.4s ease',
            height: `${getChatboxHeight()}px`,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(255,255,255,0.2)',
            maxWidth: '100%',
          }}
        >
          <div
            ref={chatRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              marginBottom: '16px',
              padding: '12px',
              background: 'rgba(0,0,0,0.05)',
              borderRadius: '12px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#A0AEC0 rgba(0,0,0,0.05)',
              maxHeight: '350px',  // Set a fixed height for messages container
            }}
          >
            {messages.length === 0 && (
              <div style={{
                color: '#E2E8F0',
                textAlign: 'center',
                fontSize: '15px',
                fontWeight: 500,
                opacity: 0.9,
              }}>
                👋 Hey! I'm Arpit's portfolio bot. Ask about projects or skills!
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  background: msg.sender === 'user'
                    ? 'linear-gradient(135deg, #4C1D95, #7C3AED)'
                    : 'rgba(255,255,255,0.15)',
                  color: msg.sender === 'user' ? '#FFFFFF' : '#E2E8F0',
                  marginLeft: msg.sender === 'user' ? 'auto' : '0',
                  fontSize: '15px',
                  lineHeight: '1.5',
                  animation: 'fadeInMessage 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  marginBottom: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  background: 'rgba(255,255,255,0.15)',
                  color: '#E2E8F0',
                  fontSize: '15px',
                  fontStyle: 'italic',
                  opacity: 0.7,
                }}
              >
                Typing...
              </div>
            )}
          </div>
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                outline: 'none',
                background: 'rgba(255,255,255,0.2)',
                color: '#E2E8F0',
                fontSize: '14px',
                fontWeight: 500,
              }}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: '#4C1D95',
                color: 'white',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
