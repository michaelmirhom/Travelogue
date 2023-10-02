import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
   
    const [trip, setTrip] = useState(null);
    
   
    const [loading, setLoading] = useState(true);
        
        const [error, setError] = useState(null);
    
       
        const { id } = useParams();
        
       
        useEffect(() => {
            
            fetch(`http://localhost:5555/api/trips/${id}`)
                .then(response => {
                
                    if (!response.ok) throw new Error("Network response was not ok");
                    
                    return response.json();
                })
                .then(data => {
                    
                    setTrip(data);
                    
                    setLoading(false);
                })
                .catch(err => {
                
                    setError(err.message);
                
                    setLoading(false);
                });
        
    
    
