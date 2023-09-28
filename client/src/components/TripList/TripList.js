import React, { useState, useEffect } from 'react';
const TripList = () => {
    
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        fetch('http://localhost:5555/api/trips') 
            .then(response => {
                
                if (!response.ok) {
                    throw new Error('Failed to fetch trips');
                }
                
                return response.json();
            })
            .then(data => {
                
                setTrips(data);
                setIsLoading(false);
            })
            .catch(err => {
               
                setError(err.message);
                
                setIsLoading(false);
            })
