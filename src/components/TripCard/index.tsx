import styled from 'styled-components';

type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

type Props = {
  trip: TripType;
  onDeleteTrip: (id: string) => void;
};


const Card = styled.div`
  padding: 5rem;
  border-radius: 12px;
  background-color: #5D737;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`;

const DeleteButton = styled.button`
margin-top: 0.5rem;
background-color: #78E3FD;
color: #5D37EE;
border: none;
padding: 2rem 4rem;
border-radius: 8px;
cursor: pointer;
font-weight: 800;
  &:hover {
    background-color: #87BBA2;
  }
`

const TripsCard = ({ trip, onDeleteTrip} : Props ) => {
  return (
    <Card>
      <h2>{trip.id}</h2>
      <h3>{trip.destination}</h3>
      <p>{trip.date}</p>
      {trip.notes && <p>{trip.notes}</p>}
     <DeleteButton
      onClick={() => {
        if (window.confirm('Delete this trip?')) {
        onDeleteTrip(trip.id);
      }
    }}>
    Delete
  </DeleteButton>
    </Card>
  );
};

export default TripsCard;
