'use client';

import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #4DA8DA;
  padding: 2rem 2rem;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  font-family: 'Geist', sans-serif;
  margin: 0;
`;

// const Nav = styled.nav`
//   margin-top: 1rem;

//   @media(min-width: 768px) {
//     margin-top: 0;
//   }
// `;

// const NavList = styled.ul`
//   display: flex;
//   gap: 1.5rem;
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const NavItem = styled.li``;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-weight: 600;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>MyTrip Journal</Title>
      {/* <Nav>
        <NavList>
          <NavItem><NavLink href="/">Home</NavLink></NavItem>
          <NavItem><NavLink href="/trips">My Trips</NavLink></NavItem>
          <NavItem><NavLink href="/add">Add Trip</NavLink></NavItem>
        </NavList>
      </Nav> */}
    </HeaderWrapper>
  );
};

export default Header;
