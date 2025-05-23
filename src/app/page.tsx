'use client';

import { useEffect, useState } from 'react';
import AddTrip from '@/components/AddTrip';
import TripList from '@/components/TripList';
// import styled from 'styled-components';

// const Container = styled.div `
// max-width: 700px;
// margin: 3rem auto;
// padding: 10 2rem;
// background: 283618;
// border-radius: 12px;

// `


type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

export default function Home() {
  const [trips, setTrips] = useState<TripType[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  // Load trips from localStorage on client only
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

  // Prevent render until client-side hydration complete
  if (!hasMounted) return null;

  // Add new trip handler
  const handleAddTrip = (newTrip: TripType) => {
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  return (
    <div>
            <h1>My Trips</h1>
      <AddTrip onAddTrip={handleAddTrip} />
      <TripList trips={trips} />
    </div>
  );
}
