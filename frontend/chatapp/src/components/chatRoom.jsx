// src/components/ChatRoom.js
import React, { useEffect, useState } from 'react';
import useWebSocket from '../services/webSocket';
import './chatRoom.css'
import { useSelector, useDispatch } from 'react-redux';


const ChatRoom = (props) => {
    // const { messages, sendMessage } = useWebSocket(`ws://localhost:8000/ws/chat/${props?.match.params.roomName}/`);
    const { messages, sendMessage } = useWebSocket(`ws://localhost:8000/ws/chat/ak`);
    const [newMessage, setNewMessage] = useState('');
    const [roomName, setRoomName] = useState('');
    const user = useSelector(state => state);


    console.log('messages', messages)
    useEffect(() => {
        console.log('props.match.params.roomName', props.match?.params?.roomName);
        setRoomName(props.match?.params?.roomName)
    }, [])
    const handleSend = () => {
        if (newMessage) {
            sendMessage(newMessage);
            setNewMessage('');
        }

    };

    const showTime = (timestamp) => {
        const date = new Date(timestamp);

        // Extract the hours and minutes
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');

        // Return the time in HH:MM format
        return `${hours}:${minutes}`;
    }

    return (
        // <div>
        //     <div classNameName="message-list">
        //         {messages.map((message, index) => (
        //             <div key={index}>{message}</div>
        //         ))}
        //     </div>
        //     <input
        //         type="text"
        //         value={newMessage}
        //         onChange={(e) => setNewMessage(e.target.value)}
        //     />
        //     <button onClick={handleSend}>Send</button>
        // </div>



        <main className="content">
            <div className="container p-0">

                <h1 className="h3 mb-3">Messages</h1>

                <div className="card">
                    <div className="row g-0">
                        <div className="col-12 col-lg-5 col-xl-3 border-right">

                            <div className="px-4 d-none d-md-block">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control my-3" placeholder="Search..." />
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="badge bg-success float-right">5</div>
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Vanessa Tucker
                                        <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="badge bg-success float-right">2</div>
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="William Harris" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        William Harris
                                        <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Sharon Lessman
                                        <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Christina Mason" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Christina Mason
                                        <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Fiona Green" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Fiona Green
                                        <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="Doris Wilder" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Doris Wilder
                                        <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Haley Kennedy" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Haley Kennedy
                                        <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action border-0">
                                <div className="d-flex align-items-start">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40" />
                                    <div className="flex-grow-1 ml-3">
                                        Jennifer Chang
                                        <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
                                    </div>
                                </div>
                            </a>

                            <hr className="d-block d-lg-none mt-1 mb-0" />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-9">
                            <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                <div className="d-flex align-items-center py-1">
                                    <div className="position-relative">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                    </div>
                                    <div className="flex-grow-1 pl-3">
                                        <strong>Sharon Lessman</strong>
                                        <div className="text-muted small"><em>Typing...</em></div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-lg mr-1 px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
                                        <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
                                        <button className="btn btn-light border btn-lg px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
                                    </div>
                                </div>
                            </div>

                            <div className="position-relative">
                                <div className="chat-messages p-4">

                                    {messages.map((messageDetails, index) => {
                                        // <div key={index}>{message}</div>
                                        return (

                                            <>
                                                {console.log(messageDetails)}

                                                {user.userInfo.user_id == messageDetails.user &&
                                                    <div className="chat-message-right pb-4">
                                                        <div>
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                            <div className="text-muted small text-nowrap mt-2">{showTime(messageDetails.timestamp)}</div>
                                                        </div>
                                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                            <div className="font-weight-bold mb-1">You</div>
                                                            {messageDetails.content}
                                                        </div>
                                                    </div>
                                                }

                                                {user.userInfo.user_id != messageDetails.user &&
                                                    <div className="chat-message-left pb-4">
                                                        <div>
                                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                                            <div className="text-muted small text-nowrap mt-2">{showTime(messageDetails.timestamp)}</div>
                                                        </div>
                                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                                            <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                                            {messageDetails.content}
                                                        </div>
                                                    </div>
                                                }
                                            </>
                                        )
                                    })}




                                    {/* <div className="chat-message-right mb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1">You</div>
                                            Cum ea graeci tractatos.
                                        </div>
                                    </div>

                                    <div className="chat-message-left pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                            <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                            Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                                            Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                        </div>
                                    </div>

                                    <div className="chat-message-left pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:37 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                            <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                            Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.
                                        </div>
                                    </div>

                                    <div className="chat-message-right mb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:38 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1">You</div>
                                            Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                        </div>
                                    </div>

                                    <div className="chat-message-left pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:39 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                            <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                            Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                        </div>
                                    </div>

                                    <div className="chat-message-right mb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:40 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1">You</div>
                                            Cum ea graeci tractatos.
                                        </div>
                                    </div>

                                    <div className="chat-message-right mb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:41 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1">You</div>
                                            Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.
                                        </div>
                                    </div>

                                    <div className="chat-message-left pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:42 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                            <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                            Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
                                            Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
                                        </div>
                                    </div>

                                    <div className="chat-message-right mb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:43 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1">You</div>
                                            Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                                        </div>
                                    </div>

                                    <div className="chat-message-left pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:44 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                                            <div className="font-weight-bold mb-1">Sharon Lessman</div>
                                            Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
                                        </div>
                                    </div> */}

                                </div>
                            </div>

                            <div className="flex-grow-0 py-3 px-4 border-top">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Type your message" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                                    <button className="btn btn-primary" onClick={handleSend}>Send</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>




    );
};

export default ChatRoom;
