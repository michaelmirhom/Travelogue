import React, { useState, useEffect } from 'react';
const DestinationList = () => {
    
    const [destinations, setDestinations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
