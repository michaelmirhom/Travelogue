import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Signup = () => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const handleSignup = (e) => {
       
        e.preventDefault();
       
       if (!username || !email || !password) {
        setErrorMessage('Please provide a username, email, and password.');
        return;

        }
        fetch('http://localhost:5555/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then((response) => {
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then((data) => {
            
            if (data.success) {
                history.push('/login');
            } else {
               
                setErrorMessage(data.message || "Signup failed.");
            }
        })
        