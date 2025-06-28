import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  border-radius: 100%;
`;

const StyledParagraph = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

function Logo() {
  return (
    <StyledLogo>
      <>
        <Img src='/cottage.webp' alt='Logo' />
        <StyledParagraph>COTTAGE</StyledParagraph>
      </>
    </StyledLogo>
  );
}

export default Logo;
