import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import NavBar from './components/navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import People from './pages/people';
import SingUp from './pages/signUp';
import SingIn from './pages/singIn';
import ChatRoom from './components/chatRoom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
     <Routes>
    <Route path="/" element={<NavBar/>}>
    
    <Route index element={<Home />} />
    <Route path="People" element={<People />} />
    <Route path="signin" element={<SingIn />} />
    <Route path="signup" element={<SingUp />} />
    <Route path="/rooms/:roomName" render={(props) => <ChatRoom roomName={props.match.params.roomName} />} />

     
    </Route>
    {/* <Route path="about" element={<AboutPage />} /> */}
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
