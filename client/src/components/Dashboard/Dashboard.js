import React, { useEffect, useState } from 'react';
const Dashboard = () => {
    
    const [trips, setTrips] = useState([]);
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        
        fetch('http://localhost:5555/api/trips') 
            .then(response => response.json()) 
            .then(data => setTrips(data)) 
            .catch(err => console.error('Error fetching trips:', err)); 