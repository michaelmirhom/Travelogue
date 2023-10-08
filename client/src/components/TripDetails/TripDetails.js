import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
    const [trip, setTrip] = useState(null);
    const [reviews, setReviews] = useState([]);  
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
                user_id: 1, 
                trip_id: trip.id
            })
        })
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                setReviews(data);
            } else {
                setReviews(prevReviews => [...prevReviews, data]);
            }
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
                return fetch(`http://localhost:5555/api/reviews?trip_id=${id}`);
            })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setReviews(data);
                } else {
                    setReviews([data]);
                }
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
    console.log("Reviews Data:", reviews);


    return (
        <div className="container">
            <h2>{trip.destination}</h2>
            <p>{trip.description}</p>
            <p><strong>Start Date:</strong> {new Date(trip.start_date).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {trip.end_date ? new Date(trip.end_date).toLocaleDateString() : 'Ongoing'}</p>
            <p><strong>Photos:</strong> {trip.photos}</p>

            <div className="review-section">
                <h3 className="review-heading">Reviews</h3>
                {reviews.map(review => (
                    <div key={review.id} className="review-content">
                        <p>{review.content}</p>
                        <div className="review-rating">
                            {"★".repeat(review.rating)}
                        </div>
                    </div>
                ))}
                <h3 className="review-heading">Add a Review</h3>
                <textarea
                    className="add-review-textarea"
                    value={newReviewContent}
                    onChange={(e) => setNewReviewContent(e.target.value)}
                    placeholder="Your review"
                />
                <select
                    className="add-review-select"
                    value={newReviewRating}
                    onChange={(e) => setNewReviewRating(Number(e.target.value))}
                >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                </select>
                <button className="add-review-button" onClick={handleAddReview}>Add Review</button>
            </div>
        </div>
    );
}

export default TripDetails;





  
    
