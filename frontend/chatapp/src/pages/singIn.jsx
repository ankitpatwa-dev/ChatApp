import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import authService from '../services/authService';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { addInfo } from '../redux/slice/slices';

function SingIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('')


  const handleLogin = (e) => {
    e.preventDefault();

    authService.login(username, password).then(
        response => {
          console.log('res',response);
          const decoded = jwtDecode(response.access);
          dispatch(addInfo(decoded))
            setMessage('Login successful');
            navigate('/');
        },
        error => {
          console.log(error);
            setMessage('Login failed');
        }
    );
};

  return (
    <div className='container mt-5'>
      <Form>

      {message &&
       <Alert key={messageType} variant={messageType}>
       {message}
     </Alert>
      }

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type='text' placeholder='Enter Username' value={username} onChange={(e) => { setUsername(e.target.value)}} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
          </Col>
        </Form.Group>
        <Button variant="primary" onClick={handleLogin} >SignIn</Button>
      </Form>
    </div>
  );
}

export default SingIn;