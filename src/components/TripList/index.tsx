'use client';
import TripCard from '@/components/TripCard';
import styled from 'styled-components';

const ListWrapper = styled.div`
display:flex;
flex-direction:column;
gap: 1rem;
margin-top: 1.5rem;
`

type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

type TripListProps = {
  trips: TripType[]; 
};

export default function TripList({ trips }: TripListProps) {
  if (trips.length === 0) {
    return <p>No trips saved yet.</p>;
  }

  return (
    <ListWrapper>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </ListWrapper>
  );
}
