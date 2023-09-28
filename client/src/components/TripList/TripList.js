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
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Trip List</h2>
            {trips.map(trip => (
                <div key={trip.id}>
                    <h3>{trip.destination}</h3>
                    <p>{trip.description}</p>
                    <small>From: {new Date(trip.start_date).toLocaleDateString()} To: {new Date(trip.end_date).toLocaleDateString()}</small>
                </div>
            ))}
        </div>
    );
}

export default TripList;
