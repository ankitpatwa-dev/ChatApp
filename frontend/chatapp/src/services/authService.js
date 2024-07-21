import axios from 'axios';
import { jwtDecode } from "jwt-decode";
const API_URL = 'http://localhost:8000/';



const register = (username, email, password, firstName, lastName) => {
    return axios.post(API_URL + 'register/', {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName
    });
};


const login = (username, password) => {
    return axios.post(API_URL + 'login/', {
        username,
        password
    }).then(response => {
        if (response.data.access) {
            localStorage.setItem('user', JSON.stringify(response.data));
            setToken();
        }
        return response.data;
    });
};

const logout = () => {
    console.log('logout')
    localStorage.removeItem('user');
};


const getToken = () => {
    const token = localStorage.getItem('user'); // Retrieve token from local storage
    return token;
}

const setToken = () => {
    const token = JSON.parse(getToken());
    const api = axios.create({
        baseURL: API_URL,
        headers: {
          'Authorization': `Bearer ${token?.access}`
        }
      });
    console.log(api)
    return api;
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const getCurrentUserInfo = () => {
    const user = getCurrentUser();
    
    if (user && user.access){
        const decoded = jwtDecode(user.access);
        return decoded;
    }
    else{
        return {};
    }
};


const isAuthenticated = () => {
    const user = getCurrentUser();
    console.log(user);
    if (user && user.access) {
        try {
            const decoded = getCurrentUserInfo();
            // console.log('decode',decoded);
            // console.log(currentTime)
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                logout();
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    return false;
};



export default {
    register,
    login,
    logout,
    getToken,
    setToken,
    getCurrentUser,
    isAuthenticated,
    getCurrentUserInfo,
};