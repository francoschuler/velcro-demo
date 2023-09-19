import { Icon } from '@chakra-ui/react'
import styled from '@emotion/styled';
import {ReactComponent as VelcroIcon} from '../../assets/newIcons/Velcro.svg';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 4rem;
    position: sticky;
`;

function Header() {
  
  const navigate = useNavigate();

  return (
    <HeaderContainer>
        <Icon boxSize={'15rem'} onClick={() => navigate('/home')} cursor={'pointer'}>
          <VelcroIcon />
        </Icon>
    </HeaderContainer>

  )
}

export default Header