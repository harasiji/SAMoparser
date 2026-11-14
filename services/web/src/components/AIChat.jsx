import { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Привет! Я ИИ-помощник SAMoparser. Я могу помочь проанализировать ваш Excel-файл или найти нарушения лицензий. Чем помочь?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Добавляем сообщение пользователя
    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput('');

    // Имитация ответа ИИ
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: 'Я пока не подключен к базе данных, но в будущем я смогу парсить ваш файл и отвечать на вопросы по лицензиям!', isBot: true }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Плавающая кнопка */}
      <button className="ai-chat-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Окно чата */}
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={20} />
              ИИ-Помощник
            </div>
            <button className="ai-chat-close" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-chat-input-area">
            <input 
              type="text" 
              placeholder="Задайте вопрос..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}