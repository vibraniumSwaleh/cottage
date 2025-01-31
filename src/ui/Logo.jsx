import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  border-radius: 100%;
`;

function Logo() {
  return (
    <StyledLogo>
      <>
        <Img src='/cottage.webp' alt='Logo' />
        <p>COTTAGE</p>
      </>
    </StyledLogo>
  );
}

export default Logo;
