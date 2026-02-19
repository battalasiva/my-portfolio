import styled, { keyframes } from 'styled-components';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
    bottom: 10px;
    right: 10px;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, crimson 0%, #c0392b 100%);
  color: white;
  padding: 20px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

export const MessageBubble = styled.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 1.4rem;
  line-height: 1.5;
  word-wrap: break-word;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background: ${props => props.isUser 
    ? 'linear-gradient(135deg, crimson 0%, #c0392b 100%)' 
    : 'white'};
  color: ${props => props.isUser ? 'white' : '#333'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

export const TypingIndicator = styled.div`
  display: flex;
  gap: 5px;
  padding: 12px 16px;
  background: white;
  border-radius: 16px;
  width: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  span {
    width: 8px;
    height: 8px;
    background: #888;
    border-radius: 50%;
    animation: ${bounce} 1.4s infinite ease-in-out both;
    
    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
`;

export const ChatInputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
  background: white;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e0e0e0;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 24px;
  font-size: 1.4rem;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: crimson;
  }
  
  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  background: linear-gradient(135deg, crimson 0%, #c0392b 100%);
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(220, 20, 60, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
