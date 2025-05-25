'use client'
import styled from 'styled-components';

const FooterWrapper = styled.footer 
`
background-color: #4DA8DA;
padding: 20px;
text-align: center;
border-top: 1px solid #dee2e6;
box-shadow: 0 -2px 4px rgba(0, 0.1, 1, 0.1);
  p {
    font-size: 1.2rem;
    color: #FFFFFF;
    margin: 0;
    font-family: 'Geist', sans-serif;
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    padding: 18px;
      p {
        font-size: 1rem;
      }
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <p>  © {new Date().getFullYear()} MyTrip Journal. All rights reserved.</p>
      </div>
    </FooterWrapper>
      
  )
}

export default Footer
