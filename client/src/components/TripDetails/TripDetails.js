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
       
    }, [id]);
    
    
    if (loading) return <div>Loading...</div>;
    
    
    if (error) return <div>Error: {error}</div>;
    
    
    if (!trip) return <div>No trip details found.</div>;

    return (
        <div>
            
            <h2>{trip.destination}</h2>
            <p>{trip.description}</p>
            <p><strong>Start Date:</strong> {new Date(trip.start_date).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {trip.end_date ? new Date(trip.end_date).toLocaleDateString() : 'Ongoing'}</p>
            <p><strong>Photos:</strong> {trip.photos}</p>
           
        </div>
    );
}

export default TripDetails;
    
    
