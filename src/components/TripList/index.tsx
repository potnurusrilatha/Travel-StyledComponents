'use client';
import TripCard from '@/components/TripCard';
import styled from 'styled-components';

const ListWrapper = styled.div`
background-color: #B14A65;
border: 2px solid #fff;
display:flex;
flex-direction:column;
gap: 1rem;
margin-top: 1.5rem;
padding: 0.5rem;
@media only queries and (max-width: 768px) {
  padding: 0.75rem;
  gap: 0.75rem;
}
@media only queries and (max-width: 480px) {
padding: 0.5rem;
gap: 0.5rem;
}
`

type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

type TripListProps = {
  trips: TripType[]; 
  onDeleteTrip: (id: string) => void;
};

export default function TripList({ trips,onDeleteTrip }: TripListProps) {
  if (trips.length === 0) {
    return <p>No trips saved yet.</p>;
  }

  return (
    <ListWrapper>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} onDeleteTrip={onDeleteTrip} />
      ))}
    </ListWrapper>
  );
}
