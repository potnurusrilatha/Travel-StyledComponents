'use client';

import { useState } from 'react';
import styled from 'styled-components';

type TripType = {
  id: string;
  destination: string;
  date: string;
  notes?: string;
};

type AddTripFormProps = {
  onAddTrip: (trip: TripType) => void;
};

const Form = styled.form`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #005bb5;
  }
`;

export default function AddTripForm({ onAddTrip }: AddTripFormProps) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!destination || !date) {
      alert('Please fill destination and date');
      return;
    }

    const newTrip: TripType = {
      id: Date.now().toString(),
      destination,
      date,
      notes: notes || undefined,
    };

    onAddTrip(newTrip);

    setDestination('');
    setDate('');
    setNotes('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="destination">Destination:</Label>
        <Input
          id="destination"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="date">Date:</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="notes">Notes:</Label>
        <Input
          id="notes"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <Button type="submit">Add Trip</Button>
    </Form>
  );
}
