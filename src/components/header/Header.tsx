import { Box, Flex, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled';
import {ReactComponent as VelcroIcon} from '../../assets/newIcons/Velcro.svg';
import {ReactComponent as BellIcon} from '../../assets/newIcons/bell.svg';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../theme';

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
        <Icon boxSize={'15rem'}>
          <VelcroIcon onClick={() => navigate('/')} cursor={'pointer'}/>
        </Icon>
        <Icon boxSize={'2rem'} cursor={'pointer'} onClick={() => navigate('/notifications')}>
          <BellIcon color={theme.main}/>
        </Icon>
      
    </HeaderContainer>

  )
}

export default Header