import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa';
import axios from 'axios';
import {
  ChatContainer,
  ChatHeader,
  ChatMessages,
  MessageBubble,
  ChatInputContainer,
  ChatInput,
  SendButton,
  CloseButton,
  TypingIndicator
} from './AIChat.styles';

const AIChat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm an AI assistant here to help you learn more about this portfolio. Feel free to ask me about skills, projects, experience, or contact information!"
      }
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const response = await axios.post(`${API_URL}/chat`, {
        message: userMessage,
        history
      });

      if (response.data.success) {
        setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaRobot size={24} />
          <span>AI Assistant</span>
        </div>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
      </ChatHeader>

      <ChatMessages>
        {messages.map((msg, index) => (
          <MessageBubble key={index} isUser={msg.role === 'user'}>
            {msg.content}
          </MessageBubble>
        ))}
        {loading && (
          <TypingIndicator>
            <span></span>
            <span></span>
            <span></span>
          </TypingIndicator>
        )}
        <div ref={messagesEndRef} />
      </ChatMessages>

      <ChatInputContainer>
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about this portfolio..."
          disabled={loading}
        />
        <SendButton onClick={handleSend} disabled={loading || !input.trim()}>
          <FaPaperPlane />
        </SendButton>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default AIChat;
