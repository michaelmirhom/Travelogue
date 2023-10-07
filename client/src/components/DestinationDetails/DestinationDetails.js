import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!destination) {
        return <div>Destination not found.</div>;
    }

    return (
        <div className="destination-details" style={{ backgroundImage: `url(${destination.image_url})` }}>
            <h2>{destination.name}</h2>
            <p>Country: {destination.country}</p>
            <p>Attractions: {destination.attractions}</p>
        </div>
    );
}

export default DestinationDetails;


export const DestinationList = () => {
    const [destinations, setDestinations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5555/api/destinations')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch destinations');
                }
                return response.json();
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
    }

    return (
        <div>
            <h2>Destinations</h2>
            {destinations.map(destination => (
                <div key={destination.id}>
                    <h3><Link to={`/destination/${destination.id}`}>{destination.name}</Link></h3>
                    <p>Country: {destination.country}</p>
                    <p>Attractions: {destination.attractions}</p>
                </div>
            ))}
        </div>
    );
};


               
             
            