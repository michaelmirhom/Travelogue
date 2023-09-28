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

        // Form validation
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
                history.push('/login'); // redirecting to login
            } else {
                setErrorMessage(data.message || "Signup failed.");
            }
        })
        .catch((error) => {
            setErrorMessage("There was an error during signup: " + error.message);
        });
    };

    return (
        <div>
            <h2>Signup Page</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
