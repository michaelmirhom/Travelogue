import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const [newReviewContent, setNewReviewContent] = useState(''); 
    const [newReviewRating, setNewReviewRating] = useState(5); 

  
    
