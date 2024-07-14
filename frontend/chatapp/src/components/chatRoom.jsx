// src/components/ChatRoom.js
import React, { useState } from 'react';
import useWebSocket from '../hooks/useWebSocket';

const ChatRoom = ({ roomName }) => {
    const { messages, sendMessage } = useWebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        sendMessage(newMessage);
        setNewMessage('');
    };

    return (
        <div>
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatRoom;
