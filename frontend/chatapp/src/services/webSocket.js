// src/hooks/useWebSocket.js
import { useEffect, useRef, useState } from 'react';
import authService from './authService';
import { jwtDecode } from 'jwt-decode';
import {useSelector, useDispatch} from 'react-redux';

const useWebSocket = (url) => {
    const [messages, setMessages] = useState([]);
    const webSocket = useRef(null);
    const user = useSelector(state => state); 

    useEffect(() => {
        webSocket.current = new WebSocket(url);

        webSocket.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        webSocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.all_message){
                setMessages((prevMessages) => [...prevMessages, ...data.all_message]);
            }
            console.log('event',event)
            setMessages((prevMessages) => [...prevMessages, data]);
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
            webSocket.current.send(JSON.stringify({ message,user_id:user?.userInfo?.user_id}));
        }
    };

    return { messages, sendMessage };
};

export default useWebSocket;
