import styled from 'styled-components';

type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

const Card = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #c11215;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

const TripsCard = ({ trip }: { trip: TripType}) => {
  return (
    <Card>
      <h3>{trip.destination}</h3>
      <p>{trip.date}</p>
      {trip.notes && <p>{trip.notes}</p>}
    </Card>
  );
};

export default TripsCard;
