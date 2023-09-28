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