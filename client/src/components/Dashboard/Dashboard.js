import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [trips, setTrips] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [user, setUser] = useState(null);  


    useEffect(() => {
        
        fetch('http://localhost:5555/api/trips') 
            .then(response => response.json())
            .then(data => setTrips(data))
            .catch(err => console.error('Error fetching trips:', err));

       
        fetch('http://localhost:5555/api/destinations') 
            .then(response => response.json())
            .then(data => setDestinations(data))
            .catch(err => console.error('Error fetching destinations:', err));
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the Travelogue Dashboard!</p>

            <div>
                <h3>Your Trips</h3>
                <ul>
                    {trips.map(trip => (
                        <li key={trip.id}>{trip.destination}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Your Destinations</h3>
                <ul>
                    {destinations.map(destination => (
                        <li key={destination.id}>{destination.name} - {destination.country}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
