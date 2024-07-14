// src/hooks/useWebSocket.js
import { useEffect, useRef, useState } from 'react';

const useWebSocket = (url) => {
    const [messages, setMessages] = useState([]);
    const webSocket = useRef(null);

    useEffect(() => {
        webSocket.current = new WebSocket(url);

        webSocket.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        webSocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data.message]);
        };

        webSocket.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            webSocket.current.close();
        };
    }, [url]);

    const sendMessage = (message) => {
        if (webSocket.current.readyState === WebSocket.OPEN) {
            webSocket.current.send(JSON.stringify({ message }));
        }
    };

    return { messages, sendMessage };
};

export default useWebSocket;
