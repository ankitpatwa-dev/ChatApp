import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import authService from '../services/authService';
import Alert from 'react-bootstrap/Alert';

function SingUp() {


  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleRegister = (e) => {
      e.preventDefault();
      if (confirmPassword !== password){
        setMessageType('danger');
        setMessage('confirm password and password are different');
        return;
      }
      authService.register(username, email, password, firstName, lastName).then(
          response => {
              console.log(response);
              if (response?.data?.id){
                setMessageType('success');
                setMessage('User registered successfully');
              }
              
          },
          error => {
            console.log(error)
            const mess = ''
            if (error?.response?.data){
              setMessageType('danger');
              setMessage(Object.values(error.response.data));
            }
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
          username
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='Enter Username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Firstname
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='Enter Firstname' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Lastname
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' placeholder='Enter lastname' value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Confirm Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={handleRegister}>SignUp</Button>
    </Form>
  </div>
  );
}

export default SingUp;