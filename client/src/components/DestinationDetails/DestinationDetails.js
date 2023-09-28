
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const DestinationDetails = () => {
    
    const [destination, setDestination] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        
        fetch(`http://localhost:5555/api/destinations/${id}`)
            .then(response => {
               
                if (!response.ok) {
                    throw new Error('Failed to fetch destination details');
                }
               
                return response.json();
            })
            .then(data => {
              
                setDestination(data);
               
                setIsLoading(false);
            })
            .catch(err => {
                   
                   setError(err.message);
                      
                       setIsLoading(false);
                    });
                }, [id]); 

                     
               
             
            