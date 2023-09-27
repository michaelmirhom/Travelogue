const handleLogin = (e) => {

    e.preventDefault();

    
    fetch('http://localhost:5555/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then((response) => {
     
        return response.json();
    })
    .then((data) => {
       
        if (data.token) {
           
            localStorage.setItem('authToken', data.token);
           
        } else {
          
            console.error("Login failed:", data.message);
        }
    })
    .catch((error) => {
    
        console.error("There was an error logging in:", error);
    });
};
