import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TripDetails = () => {
   
    const [trip, setTrip] = useState(null);
    
   
    const [loading, setLoading] = useState(true);
    
