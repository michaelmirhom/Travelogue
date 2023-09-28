import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        // Form validation
        if (!email || !password) {
            setErrorMessage('Please provide both email and password.');
            return;
        }

        fetch('http://localhost:5555/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                history.push('/dashboard'); // redirecting to dashboard
            } else {
                setErrorMessage(data.message || "Login failed.");
            }
        })
        .catch((error) => {
            setErrorMessage("There was an error logging in: " + error.message);
        });
    };

    return (
        <div>
            <h2>Login Page</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

