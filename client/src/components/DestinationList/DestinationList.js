import React, { useState, useEffect } from 'react';
const DestinationList = () => {
    
    const [destinations, setDestinations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        fetch('http://localhost:5555/api/destinations') 

            .then(response => {
               
                if (!response.ok) {
                    throw new Error('Failed to fetch destinations');
                }
               
                return response.json()
            })
            .then(data => {
                
                setDestinations(data);
                
                setIsLoading(false);
            })
            .catch(err => {
              
                setError(err.message);
                
         

