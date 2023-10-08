import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
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
                user_id: 1,  // TODO: Fetch the logged in user's ID
                trip_id: trip.id
            })
        })
        .then(response => response.json())
        .then(data => {
            // TODO: Update reviews list in state if required
            setNewReviewContent('');
            setNewReviewRating(5);
        });
    };

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

export default TripDetails;

    
    
