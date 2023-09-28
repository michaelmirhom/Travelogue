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
                setIsLoading(false);
            });
    }, []); 
        
    if (isLoading) {
        return <div>Loading...</div>;
    }


    if (error) {
        return <div>Error: {error}</div>;
        
        return (
            <div>
                <h2>Destinations</h2>
               
                {destinations.map(destination => (
                    <div key={destination.id}>
                        <h3>{destination.name}</h3>
                        <p>Country: {destination.country}</p>
                       
                        <p>Attractions: {destination.attractions}</p>
                    </div>
                ))}
            </div>
        );
    }
    
    
            
         

