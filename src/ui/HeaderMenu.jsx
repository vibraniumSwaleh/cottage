import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import { HiOutlineUser } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';

const StyleedHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyleedHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyleedHeaderMenu>
  );
}

export default HeaderMenu;
