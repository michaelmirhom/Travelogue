import React, { useState, useEffect } from 'react';

const TripList = () => {
    const [trips, setTrips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newDestination, setNewDestination] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAddTrip = () => {
        fetch('http://localhost:5555/api/trips', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                destination: newDestination,
                description: newDescription,
                user_id: 1  
            })
        })
        .then(response => response.json())
        .then(data => {
            setTrips(prevTrips => [...prevTrips, data]);
            setNewDestination('');
            setNewDescription('');
        });
    };

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
            
            <div>
                <input 
                    type="text" 
                    placeholder="Destination" 
                    value={newDestination}
                    onChange={(e) => setNewDestination(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)} 
                />
                <button onClick={handleAddTrip}>Add Trip</button>
            </div>

            {trips.map(trip => (
                <div key={trip.id}>
                    <h3>{trip.destination}</h3>
                    <p>{trip.description}</p>
                    <small>From: {new Date(trip.start_date).toLocaleDateString()} To: {trip.end_date ? new Date(trip.end_date).toLocaleDateString() : 'Ongoing'}</small>
                </div>
            ))}
        </div>
    );
}

export default TripList;
