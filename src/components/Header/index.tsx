'use client';

// import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #4DA8DA;
  padding: 2rem 2rem;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
      font-size: 2rem;
      color: white;
      font-family: 'Geist', sans-serif;
      margin:0;
    }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

  }
`;



const Header = () => {
  return (
    <HeaderWrapper>
      <h1>MyTrip Journal</h1>
  
    </HeaderWrapper>
  );
};

export default Header;
