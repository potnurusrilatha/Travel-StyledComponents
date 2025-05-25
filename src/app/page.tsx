'use client';

import { useEffect, useState } from 'react';
import AddTrip from '@/components/AddTrip';
import TripList from '@/components/TripList';
import styled from 'styled-components';

const Container = styled.div `
flex:1;
max-width: 700px;
margin: 3rem auto;
padding: 10px 2px;
background: #283618;
border-radius: 12px;

h1 {
font-size: 2rem;
color: #c1121f;
text-align:center;
}

@media only screen and (max-width: 480px) {
  padding: 8px 2px;

    h1 {
    font-size: 1.5rem;
    }
}
`;


type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

export default function Home() {
  const [trips, setTrips] = useState<TripType[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  
  useEffect(() => {
    const stored = localStorage.getItem('trips');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTrips(parsed);
        }
      } catch (error) {
        console.error('Error parsing trips from localStorage', error);
      }
    }
    setHasMounted(true);
  }, []);

  
  if (!hasMounted) return null;


  const handleAddTrip = (newTrip: TripType) => {
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  const handleDeleteTrip = (id: string) => {
    const updatedTrips = trips.filter((trip) => trip.id !==id);
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));

  };

  return (
    <Container>
        <h1>Enter your  Trips Here</h1>
      <AddTrip onAddTrip={handleAddTrip} />
      <TripList trips={trips} onDeleteTrip={handleDeleteTrip} />
    </Container>
    
  );
}
