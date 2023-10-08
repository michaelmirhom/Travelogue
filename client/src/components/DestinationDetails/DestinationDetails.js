import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
    
    const [destination, setDestination] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

   
    const [newReviewContent, setNewReviewContent] = useState('');
    const [newReviewRating, setNewReviewRating] = useState(5);

   
    const handleAddReview = () => {
        fetch('http://localhost:5555/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: newReviewContent,
                rating: newReviewRating,
                user_id: 1,  
                destination_id: destination.id
            })
        })
        .then(response => response.json())
        .then(data => {
            
            setNewReviewContent('');
            setNewReviewRating(5);
        });
    };


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

            <h3>Add a Review</h3>
            <textarea
                value={newReviewContent}
                onChange={(e) => setNewReviewContent(e.target.value)}
                placeholder="Your review"
            />
            <select
                value={newReviewRating}
                onChange={(e) => setNewReviewRating(Number(e.target.value))}
            >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
            </select>
            <button onClick={handleAddReview}>Add Review</button>
        </div>
    );
}

export default DestinationDetails;


               
             
            