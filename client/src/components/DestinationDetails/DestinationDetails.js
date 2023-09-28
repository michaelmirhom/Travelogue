
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const DestinationDetails = () => {
    
    const [destination, setDestination] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();